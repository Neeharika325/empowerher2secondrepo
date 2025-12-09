// Import the functions you need from the SDKs you need
import { initializeApp } from 
"https://book-management-app-1cac7-default-rtdb.asia-southeast1.firebasedatabase.app/firebase.js";
import{
    getFirestore, collection,addDoc,onSnapshot,deleteDoc,updateDoc, doc
} from
"https://book-management-app-1cac7-default-rtdb.asia-southeast1.firebasedatabase.app/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "book-management-app-1cac7.firebaseapp.com",
  databaseURL: "https://book-management-app-1cac7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-management-app-1cac7",
  storageBucket: "book-management-app-1cac7.firebasestorage.app",
  messagingSenderId: "825177843122",
  appId: "1:825177843122:web:d4663a21239e45865df0ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const booksRef=collection(db, "books");

const bookList=document.getElementById("bookList");
const searchInput=document.getElementById("search");

const modal=document.getElementById("modal");
const modalTitle=document.getElementById("modalTitle");

const modalAuthor=document.getElementById("modalAuthor");
const modalPrice=document.getElementById("modalPrice");
const modalImage=document.getElementById("modalImage");
document.getElementById("closeModal").onclick=() =>
    modal.classList.add("hidden");
let books=[];
document.getElementById("addBook").onclick=async ()=>{
    const title=document.getElementById("title").value ;
    const author=document.getElementById("author").value ;
    const price=document.getElementById("price").value ;
    const image=document.getElementById("image").value;
     if(!title || !author || !price || !image){
        alert("Fill all fields!");
        return;
     }
     await addDoc (booksRef, {title,author,price,image });
     alert("Book Added!");
    };
    document.getElementById("dummyData").onclick =async ()=> {
        const dummy =[
        {title:"Clean Code", author:"Robert C Martin", price:450,image:"https://picsum.photos/200"},
        {title:"Atomic Habits", author:"James Clear", price: 350, image:"https//picsum.photos/201"},
        {title:"Deep Work" , author:"Cal Newport", price:300, image:"https://picsum.photos/202"},
        {title:"JavaScript Guide", author:"Kyle Simpson", price: 400, image:"https://picsum.photos/203"},
        {title:"Rich Dad Poor Dad", author:"Robert Kiyosaki", price:250, image:"https://picsum.photos/204"}
        ];
        for (let b of dummy){
            await addDoc(booksRef, b);
        }
        alert("Dummy books added!");
     };

     onSnapshot(booksRef,(snapsot) =>{
        books=[];
        bookList.innerHTML="";
        snapShot.foreach((docSnap) =>{
            books.push({id:docSnap.id, ...docSnap.data() });
        });
        renderBooks(books);
         });
 
         function renderBooks(data) {
            bookList.innerHTML= "";
            data.foreach(book =>{
                bookList.innerHTML +=`
                <div class="card">
                    <img src="${book.image}">
                    <h3>${book.title}</h3>
                    <p>Author:${book.author}</p>
                    <P>rupees${book.price}</P>
                    <div class="actions">

                    <button onclick="ViewDetails('${book.id}')">View Details</button>
                   <button onclick="updateAuthor('${book.id}')">Update Author</button>
                    <button class="delete" onclick="deleteBook('${book.id}')">Delete</button>
                     </div>
                     </div>
                    `; 
                    });
         }

        window.viewDetails = (id) =>{
        const b=books.find(x =>x.id ===id);
        modalTitle.textContent=b.title;
        modalAuthor.textContent="Author: " + b.author;
        modalPrice.textContent="Price: rupees" + b.price;
        modalImage.src=b.image;
        modal.classList.remove("hidden");
      };
      window.updateAuthor = async (id) => {
            const newAuthor =prompt("Enter new author:");
            if(!newAuthor) 
                return;
            await updateDoc(doc(db,"books", id),
           {author:newAuthor});
           alert("Author updated!");
            };

            window.deleteBook =async (id) =>{
                await deleteDoc(doc(db, "books", id));
                alert("Book deleted!");
            }
            searchInput.addEventListener("input", ()=>{
                const text=searchInput.toLowerCase();
                const filtered=books.filter(b =>
                    b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text)
                );
                renderBooks(filtered);
            });







       async function fetchTodos(){
         try{
        const response=await
        fetch("https://jsonplaceholder.typicode.com/todos");
        const data=await response.json();
        const first20=data.slice(0,20);
        localStorage.setItem("todos", JSON.stringify(first20));
        renderTodos();
     }
     catch (error){
        console.log("Error fetching todos:",error);
     }
     }

     function renderTodos(){
        const container=document.getElementById("todo-container");
        container.innerHTML="";
        const todos=JSON.parse(localStorage.getItem("todos")) || [];
         todos.foreach((todo, index) => {
            const card=document.createElement("div");
            card.style.border="1px solid #ccc";
            card.style.paddind="10px";
            card.style.margin="10px 0";
            card.style.borderRadius="5px";

            const title=document.createElement("p");
            title.innerHTML=`<strong>Title:</strong> ${todo.title}`;

            const status=document.createElement("p");
            status.innerHTML=`<strong>Completed:</strong> ${todo.completed}`;

            const delBtn=document.createElement("button");
            delBtn.textContent="Delete";
            delBtn.style.padding="5px 10px";
            delBtn.style.cursor="pointer";

            delBtn.addEventListener("click", ()=> deleteTodo(index));

            card.appendChild(title);
            card.appendChild(status);
            card.appendChild(delBtn);
            container.appendChild(card);
        });
      }

      function deleteTodo(index){
        let todos=JSON.parse(localStorage.getItem("todos"));
        todos.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(todos));
        renderTodos();
      }

      if(!localStorage.getItem("todos")){
        fetchTodos();
         } else{
            renderTodos();
         }
         

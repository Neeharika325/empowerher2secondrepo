function FirebaseAxios(){
const newStudent={
    name:"Ani",
    course:"React",
    age:21

};
axios.post("/student.json",newStudent)
.then(response=>{
    console.log("Data added",response.data);
})
.catch(error=>{
    console.log("Wrong site",error);
})

export default from FirebaseAxios;
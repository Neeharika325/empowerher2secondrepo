import {useNavigate} from "react-router-dom";
import {useState} from "react";
function Login(){
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();



const handleLogin=()=>{
    if(email==="admin@gmail.com" && password==="admin@1234" ){
        alert("Login success");
       navigate ("/admin");
  }else{
    alert("Wrong email or password");
  }
};
return(
    <div>
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password"placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
);

}

export default Login;
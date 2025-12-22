import {useEffect, useState} from "react";

const UserData=() =>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=> res.json())
        .then((data)=> {
            setUser(data);
            setLoading(false);
        });
    },[]);
    if (loading){
        return<h3>LOading...</h3>;
    }
    return(
        <div>
            <h2>User Details</h2>
            <p><strong>Name:</strong>{user.name}</p>
            <p><strong>Email:</strong>{user.phone}</p>
        </div>
    );

};
export default UserData;
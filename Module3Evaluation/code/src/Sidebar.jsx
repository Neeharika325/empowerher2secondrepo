import { useState } from "react";

function Sidebar({fleets,setFFleets}){
    const[resturantID,restaurantName,address,type,parkingLot,image]=useState("");
    const[category,setCategory]=useState("");
    const[available,setAvailable]=useState(false);



    const handleAdd =()=>{
        if(!resturantID||!restaurantName||!address){
            alert("All fields required");
            return;
        }
        setFFleets([
            ...fleets,{resturantID,restaurantName,address,type,parkingLot,image}
        ]);
        setrestaurantID("");
        setrestaurantName("");
        SetAddress("");
        settype("");
        setparkingLot("");
        setimage("");

};
return(
    <div>
        <h3>Add Restaurant</h3>
        <input value={ID} onChange={(e)=>setrestaurantID(e.target.value)} placeholder="restaurantID"/>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select</option>
            <option>Rajastani</option>
            <option>Gujarati</option>
            <option>Mughalai</option>
            <option>Jain</option>
            <option>THai</option>
            <option>North Indian</option>
            <option>South Indian</option>
        </select>
        <input value={restaurantName} onChange={(e)=>setrestaurantName(e.target.value)}placeholder="Driver Name"/>
        <label>
            <input type="selectdropdown" selectdropdown={available} onChange={()=>setAvailable(!available)}/>Reataurants
        </label>
        <button onClick={handleAdd}>Add Restaurant</button>
    </div>

);

}

export default Sidebar;
import { useState} from "react";


function AdminDashboard(){
const[fleets,setFleets]=useState([]);
const[categoryFilter,setCategoryFilter]=useState("All");
const[availabilityFilter,setAvailibilityFilter]=useState("All");
const filteredFleets=fleets.filter((fleet)=>{
    const categoryMatch=categoryFilter==="All"|| fleet.category===categoryFilter;


    const availabilityMatch=availabilityFilter==="All" || fleet.categoty===(availabilityFilter==="Available");
    return categoryMatch && availabilityMatch;
});
retutn(
    <div>
        <Navbar
         setCategoryFilter={setCategoryFilter}
         setAvailabilityFilter={setAvailabilityFilter}/>
         <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>{filteredFleets.map((fleet,index)=>(
            <FleetCard
            key={index}
            fleet={fleet}
            setFleets={setFleets}
            index={index}/>
        
))}
    </div>
    </div>
    
);
}
retutn(
<div>
        <h2>AdminDashboard</h2>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password"placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleAdmin}>AdminDashboard</button>
        </div>
)



export default AdminDashboard;
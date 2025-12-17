import {useState} from "react";
function Counter(){
    const [count,setCount] =useState(0);
    return(
    <diV>
        <h3>{count}</h3>
        <button onClick={() => setCount(count+1)}>Increment

        </button>
         </diV>
        
    );
}
export default Counter;
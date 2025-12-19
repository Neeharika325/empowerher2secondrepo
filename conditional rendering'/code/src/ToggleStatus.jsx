import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
function ToggleStatus(){
    const [status,setStatus]=useState(false);
    return(
        <div>
            < button onClick={()=> setStatus(!status)}>Toggle Status</button>
            {status ? <ComponentA />:<ComponentB />}
        </div>
    );
}

export default ToggleStatus;
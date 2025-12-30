// 









import React, {useState,Suspense,lazy} from "react";

const HeavyComponent=lazy(()=>
  import("./HeavyComponent"));
function App(){
  const [count,setCount]=useState(0);
  return(
    <div style={{padding:"20px"}}>
      <h2>React.memo & Lazy Loading Demo</h2>
      <button onClick={()=> setCount(count+1)}>Counter:{count}</button>
      <hr />
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
      <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
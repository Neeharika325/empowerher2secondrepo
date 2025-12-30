import React from "react";
const HeavyComponent= () => {
    console.log("HeavyComponent rendered");
    let total=0;
    for(let i=0;i<100000000;i++){
        total +=i;
    }

    return(
        <div>
            <h3>Heavy Component</h3>
            <p>This is a heavy UI section.</p>
        </div>
    );
};
export default React.memo(HeavyComponent);
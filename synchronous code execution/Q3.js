const loader=setInterval(() =>{
    console.log("Loading...");
}, 1000);
 
setTimeout(() => {
    clearTimeout(loader);
    console.log("Loaded successfully!");
}, 5000);
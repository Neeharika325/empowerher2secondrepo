function createCounter(){
    let count=0;


 function increment(){
    count++;
    return function(){
    console.log("Incrementing count", count)
 }
}

 function decrement(){
    count--
    console.log("decrementing count", count)
 }

 return { increment,decrement }

}
const c= createCounter();

const d=c.increment()
console.log(d())
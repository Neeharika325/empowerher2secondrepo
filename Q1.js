function checkPrime(num){
    let count=0
    for(let i=1;i<=num;i++){
       if (num%i==0){
        count++;
    }
}
if(count==2){
    return true
}else{
    return false
  }
}
let num=15;
console.log(checkPrime(num))

 
if(num%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}


console.log(`5+7=${5+7}`);

const message=`This is line 1
This is line 2
This is line 3`;
console.log(message);


const firstname="John";
const lastname="Doe";
console.log(`${firstName}${lastName}`);


const square=(n)=>n*n;
console.log(square(n))

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
/*Arrow functions ignore the object they are inside.*/

const obj = {
  value: 50,
  test:function(){
   console.log(this.value)
  }
};
obj.test();


const product = { name: "Pen", price: 10 };
const copy={...product};
console.log(copy);

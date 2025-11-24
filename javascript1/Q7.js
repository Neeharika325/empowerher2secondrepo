const arr1=[1,2,3]
const arr2=[...arr1,4,5];
console.log(arr2);


const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {name, address: { city, pin } } = user;
console.log(name,city, pin);

if (true){
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

/*let variables live only inside {} where they are declared outside, 
so javascript says the variable doesnot exit=>"x is not defined"*/

const profile = {user: { details: {email: "test@mail.com"}}
console.log(profile?.user.details);
console.log(profile?.user.email);
}


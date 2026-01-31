require('dotenv').config();
const express=require('express');

const customerController=require('./controller/customer.controller');
const orderController=require('./controller/register.controller');
 const app=express();
 app.use(express.json());


 app.use('/customers',customersControllers);
 app.use('/register',registercontroller);

 const PORT=process.env.PORT ||5000;

 app.listen(PORT,()=>{
    console.log('server running on port ${PORT}');
 });
 
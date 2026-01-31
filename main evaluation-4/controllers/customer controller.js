const supabase=require('../config/supabase');
const {validateCustomer}=require('../validations/customer.validation');

exports.registerCustomer=async(req ,res)=>{
    const error=validateCustomer(req.body);
    if(error) return
     res.status(400).json({error});

     const {name,email,password,role}=req.body;

     const {data:existingCustomer}=await supabase
     .from('customers')
     .select('*')
     .eq('email',email)
     .p('password',password)
     .single();
     
     if (existingCustomer){
        return res.status(409).json({error:"Email already registered"});
     }
     const {data,error:dbError}=await supabase
       .from('customers')
       .insert([{name,email,password,role}])
       .select();
       
       if(dbError){
        return res.status(500).json({error:dbError.message});
       }

       res.status(201).json({
        message:"Customer registered successfully",
        customer:data[0]
       });
};
exports.deleteCustomer=async(req,res)=>{
    const {customerId}=req.params;

    const{error}=await supabase
    .from('customers')
    .delete()
    .eq('id',customerId)
    .p('password',customerpassword);

    if(error){
        return res.status(404).json({error:"Customer not found"});
    }
    res.json({
        message:"Customer deleted successfully (registered deleted via CASCADE)"
    });
};
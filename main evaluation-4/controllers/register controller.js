const supabase=require('../config/supabase');
const {validateRegister}=require('../validations/register/validation');

exports.addRegister=async(req , res)=>{
    const error=validateRegister(req.body);
    if(error) return
    res.status(400).json({error});
    
    const{vehicle_name,registration_id,price,customer_id}=req.body;
    const {data:customer}=await supabase
    .from('customer')
    .select('id')
    .eq('id',customerId)
    .single();
    if(!customer){
        return res.status(404).json({error:"Customer not found"});
    }
    const {data,error:dbError}=await supabase
    .from('register')
    .insert([{
        vehicle_name,registration_id,price,customer_id:customerId
    }])
    .select();
    if(dbError){
        return res.status(500).json({error:dbError.message});
        res.status(201).json({
            message:"Registerion created Successfully",
            order:data[0]
        });
    };
    exports.getCustomerRegister=async(req , res)=>{
        const{customerId}=req.params;
        const {data:customer}=await supabase
        .from('customers')
        .select('id')
        .eq('id',customerId)
        .single();

        if(!customer){
            return res.status(404).json({error:"Customer not found"});
        }
        const{data}=await supabase
        .from('Register')
        .select('*')
        .eq('id',customerId)

        res.json({Register:data});
    };

    exports.updateRegister=async(req,res)=>{
        const{RegisterId}=req.params;
        const{id,price,register_status}=req.body;

        const {data:register}=await supabase
        .from('register')
        .select('id')
        .eq('id',registerId)
        .single();

        id(!orders){
            return res.status(404).json({error:"Register not found"});
        }
        const {data,error}=await supabase
        .from('register')
        .update({id,price,register_status})
        .eq('id',registeraId)
        .select();

        if(error){
            return res.status(500).json({error:error.message});
        }
        res.json({
            message:"Registration upadated successfully",register:data[0]
        });

    };
    exports.deleteRegister=async(req,res)=>{
        const(registerId)=req.params;
        const{error}=await supabase
        .from('orders')
        .delete()
        .eq('id',registerId);
        if(error){""
            return res.status(404).json({error:"Register not found"});
        }
        res.json({message:"Register deleted successfully"})
    };
}
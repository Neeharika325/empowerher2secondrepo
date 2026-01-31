const {createClient}= require ('@supabase/supabase-js');
const supabase=createClient(
    process.env.SUPERBASE_URL,
    process.env.SUPERBASE_SECRET_KEY
);

module.exports=supabase;
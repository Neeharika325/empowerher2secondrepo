// 































import React,{useState,useMemo,useCallback} from "react";


const ProductList = ({products,onSelectProduct}) =>{
  console.log("ProductList rendered");
  return(
    <div>
      <h3>Product List</h3>
      {products.map((product) => (
        <div key={product.id}>{product.name}-rupees{product.price}
        <button onClick={() => onSelectProduct(product)}>Select</button>

        </div>
      ))}
    </div>
  );
};

export default function App(){
  const [counter,setCounter]=useState(0);

  const products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Phone",price:20000},
    {id:3,name:"Tablet",price:30000},
  ];

  const totalPrice=useMemo(() =>{
    console.log("Calculating total price...");
    return products.reduce((sum,product)=> sum+product.price,0);
  },[products]);

  const handleProductSelect=useCallback((product)=>{
    console.log("Selected product:",product.name);
  },[]);

  return(
    <div style={{padding:"20px"}}>
      <h2>React Performance Optimization</h2>
      <h3>Total Price:rupees{totalPrice}</h3>
      <button onClick={()=>
        setCounter(counter+1)}>
       </button>
       <hr />
       <ProductList products={products} onSelectProduct={handleProductSelect}
       />
    </div>
  );
}
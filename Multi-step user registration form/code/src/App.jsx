
























import React, { useReducer } from "react";

const initialState ={
  step:1,
  isSubmitted:false,
  formData:{
    name:"",
    email:"",
    username:"",
    password:"",
  },
  errors:{},
};

function reducer(state,action){
  switch(action.type){
    case "UPDATE_FIELD":
      return{
        ...state,
        formData:{
          ...state.formData,
          [action.field]:action.value,
        },
      };
      case "NEXT_STEP":
        return{
          ...state,
          step:state.step +1,
         };
         case "PREVIOS_STEP":
          return{
            ...state,
            step:state.step-1,
          };
          case "SUBMIT_FORM":
            return{
              ...state,
              isSubmitted:true,
            };
            case "RESET_FORM":
              return initialState;
              
              default:
                return state;
  }
}

function App(){
  const[state,dispatch]=useReducer(reducer,initialState);
  const{step,formData,isSubmitted}=state;

  const StepOne = ()=>(
    <>
    <h2>Step 1:Personal Details</h2>
    <input 
      type="text"
      placeholder="Name"
      value={formData.name}
      onChange={(e) =>
        dispatch({
          type:"UPDATE_FIELD",
          field:"name",
          value:e.target.value,
        })
      }
      />
      <input 
        type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) =>
        dispatch({
          type:"UPDATE_FIELD",
          field:"email",
          value:e.target.value,
        })
      }
      />
      <button
        disabled={!formData.name || !formData.email}
        onClick={()=> dispatch({type:"NEXT_STEP"})}>Next</button>
        </>
  );

  const StepTwo = ()=>(
    <>
    <h2>step2:Account Details</h2>
     <input
       type="text"
      placeholder="Username"
      value={formData.username}
      onChange={(e) =>
        dispatch({
          type:"UPDATE_FIELD",
          field:"username",
          value:e.target.value,
        })
      }
      />
      <input
       type="password"
      placeholder="password"
      value={formData.password}
      onChange={(e) =>
        dispatch({
          type:"UPDATE_FIELD",
          field:"password",
          value:e.target.value,
        })
      }
      />
      <button onClick={()=>
        dispatch({type:"PREVIOUS_STEP"})}>Back</button>

      <button
       disabled={!formData.username || !formData.password}
       onClick={()=>dispatch({type:"NEXT_STEP"})}>Next</button>
       </>
  );
  const StepThree=()=>(
    <>
    <h2>Step:3 Review & Submit</h2>
    <p><strong>Name:</strong>{formData.name}</p>
    <p><strong>Email:</strong>{formData.email}</p>
    <p><strong>Username:</strong>{formData.username}</p>
    <p><strong>Password</strong>{formData.password}</p>

    <button onClick={()=>
       dispatch({type:"PREVIOUS_STEP"})}>Back</button>
       <button onClick={()=>
        dispatch({type:"SUBMIT_FORM"})}>Submit</button>
    </>
  );
  if(isSubmitted){
    return(
      <div>
        <h2> Form Submitted Successfully!</h2>
        <button onClick={()=>
          dispatch({type:"RESET_FORM"})}>Reset Form</button>
      </div>
    );
  }
  return(
    <div style={{ padding:"20px",maxWidth:"400px"}}>
    <h3>Progress:Step {step}/3</h3>
    {step===1 && <StepOne />}
    {step===2 && <StepTwo />}
    {step===3 && <StepThree />}
    </div>
  );

}
export default App;
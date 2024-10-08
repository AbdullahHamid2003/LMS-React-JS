import { useState } from "react";
import BAInput from "../Components/BAInput";
import BAButton from "../Components/BAButton";
import { fbSignUp } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [model, setModel] = useState<any>({})
  const navigate = useNavigate()
  
  let fillModel = (key:string,value:any)=>{
    model[key]=value
    setModel({...model})
  }

  let SignUpUser = () => {
    console.log(model);
    fbSignUp(model)
    .then(res=>{
      navigate("/login");
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-md">
          <div className="py-3">
            <p className="text-4xl font-bold">Sign Up</p>
          </div>
          <div className="py-3">
            <BAInput
            value={model.userName}
             onchange={(e:any)=>(
              fillModel("userName", e.target.value)
             )
             } 
            label="User Name"
            type="text"/>
          </div>

          <div className="py-3">
            <BAInput
             value={model.email}
             onchange={(e:any)=>(
              fillModel("email", e.target.value)
             )
             }
            label="Email"
             type="email"/>
          </div>

          <div className="py-3">
            <BAInput
             value={model.password}
             onchange={(e:any)=>(
              fillModel("password", e.target.value)
             )
             }
            label="Password"
            type="password"/>
          </div>
          <div className="py-3">
            <BAButton onClick={SignUpUser} label="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
}
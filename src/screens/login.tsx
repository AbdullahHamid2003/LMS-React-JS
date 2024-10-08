import { useState } from "react";
import { fbLogin } from "../config/firebasemethods";
import BAInput from "../Components/BAInput";
import BAButton from "../Components/BAButton";
import {useNavigate} from 'react-router-dom'


export default function Login() {

  const [model, setModel] = useState<any>({})
  const navigate = useNavigate()
  
  let fillModel = (key:string,value:any)=>{
    model[key]=value
    setModel({...model})
  }

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
    .then(res=>{
      console.log(res)
      navigate(`/admindashboard`)

    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-md">
          <div className="py-3">
            <p className="text-4xl font-bold">Login</p>
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
            <BAButton onClick={LoginUser} label="Login" />
          </div>
        </div>
      </div>
    </>
  );
}
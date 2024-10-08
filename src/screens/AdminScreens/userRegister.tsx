import { useState } from "react";
import BAInput from "../../Components/BAInput";
import BAButton from "../../Components/BAButton";
import { fbAdd } from "../../config/firebasemethods";
import BASelect from "../../Components/BASelect";

export default function InstituteForm() {

    const [userRegister, setUserRegister] = useState<any>({})

    const fillModel = (key: string, value: any) => {
        userRegister[key] = value;
        setUserRegister({ ...userRegister });
    }

    const register = () => {
        console.log(userRegister);
        fbAdd("Institute Form", userRegister)
            .then((res) => {
                console.log(res)
                alert("Data Sent Successfully")
            }).catch((err) => {
                console.log(err)
            })
    }

    const oprionsArr = [
        {
            value: "Admin",
            displayName: "Admin",
        },
        {
            value: "Student",
            displayName: "Student",
        },
        {
            value: "Teacher",
            displayName: "Teacher",
        },
        {
            value: "Institute",
            displayName: "Institute",
        },
    ]

    return (
        <>
            <h1>Register Your Self</h1>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("Name", e.target.value) }} label="Institue Name" />
                </div>
                <div className="col-md-6 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("Email", e.target.value) }} label="Institue Short Name" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("Password", e.target.value) }} label="Institue Image" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("CNIC", e.target.value) }} label="No Of Campus" />
                </div>
                
                <div className="col-md-2 mb-3">
                    {/* <select onChange={(e: any) => { fillModel("InsituteType", e.target.value) }}>
                        {arr.map((x: any, i: any) => (
                            <option value={x}>{x}</option>
                        ))}
                    </select> */}
                    <BASelect 
                    label="Register As:"
                    option={oprionsArr}
                    onchange={(e: any) => { fillModel("Register Type", e.target.value) }}
                    />
                </div>
                <div className="col-md-2 mb-3">
                    <BAButton onClick={register} label="Register" />
                </div>
            </div>
        </>
    )
}
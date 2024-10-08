import { useState } from "react";
import BAInput from "../../Components/BAInput";
import BAButton from "../../Components/BAButton";
import { fbAdd } from "../../config/firebasemethods";
import BASelect from "../../Components/BASelect";

export default function InstituteForm() {

    const [instituteForm, setInstituteForm] = useState<any>({})

    const fillModel = (key: string, value: any) => {
        instituteForm[key] = value;
        setInstituteForm({ ...instituteForm });
    }

    const register = () => {
        console.log(instituteForm);
        fbAdd("Institute Form", instituteForm)
            .then((res) => {
                console.log(res)
                alert("Data Sent Successfully")
            }).catch((err) => {
                console.log(err)
            })
    }

    const oprionsArr = [
        {
            value: "School",
            displayName: "School",
        },
        {
            value: "College",
            displayName: "College",
        },
        {
            value: "University",
            displayName: "University",
        },
        {
            value: "Institute",
            displayName: "Institute",
        },
    ]

    return (
        <>
            <h1>Institute Form</h1>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("InstituteName", e.target.value) }} label="Institue Name" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("InstituteShortName", e.target.value) }} label="Institue Short Name" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("InstituteImage", e.target.value) }} label="Institue Image" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("NoOfCampus", e.target.value) }} label="No Of Campus" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("CampusDetail", e.target.value) }} label="Campus Detail" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("Location", e.target.value) }} label="Location" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("Address", e.target.value) }} label="Address" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("Contact", e.target.value) }} label="Contact" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("OwnerContact", e.target.value) }} label="Owner Contact" />
                </div>
                <div className="col-md-4 mb-3">
                    <BAInput onchange={(e: any) => { fillModel("OwnerEmail", e.target.value) }} label="Owner Email" />
                </div>
                <div className="col-md-4 mb-3">
                    {/* <select onChange={(e: any) => { fillModel("InsituteType", e.target.value) }}>
                        {arr.map((x: any, i: any) => (
                            <option value={x}>{x}</option>
                        ))}
                    </select> */}
                    <BASelect 
                    label="Choose Your Institute"
                    option={oprionsArr}
                    onchange={(e: any) => { fillModel("InsituteType", e.target.value) }}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <BAButton onClick={register} label="Register" />
                </div>
            </div>
        </>
    )
}
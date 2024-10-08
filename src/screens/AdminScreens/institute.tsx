import { useEffect, useState } from "react"
import { fbGet } from "../../config/firebasemethods"
import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import InstituteDetails from "./instituteDetails"

export default function InstituteList(){
    const [list, setList] = useState<any>([])
    const navigate = useNavigate()

    const Details = (x:any)=>{
        navigate(`/InstituteList/InsituteDetails/${x}`)
    }

    useEffect(()=>{
        fbGet("Institute Form")
        .then((res)=>{
            console.log(res)
            setList(res)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return(
        <>
        <h1>Institute List</h1>
        <div className="container">
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Institute Name</th>
                        <th>No of Campus</th>
                        <th>Logo Image</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((x:any,i:any)=>(
                        <tr>
                            <td>{x.InstituteName}</td>
                            <td>{x.NoOfCampus}</td>
                            <td>{x.InstituteImage}</td>
                            <td><NavLink onClick={()=>{Details(x)}} to={`/InsituteDetails/${x}`}>Details</NavLink></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Routes>
        <Route path="InsituteDetails/:id" element={<InstituteDetails/>}/>
      </Routes>
        </div>
        </>
    )
}
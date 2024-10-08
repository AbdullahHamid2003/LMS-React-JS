import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function InstituteDetails(){

    const params = useParams();
    useEffect(()=>{
        console.log(params.id)
    },[])

    return(
        <><h1>Hello</h1></>
    )
}
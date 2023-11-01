import React, { useEffect, useState } from "react"
function Form(){
    const data = {name:"", email:"",password:""}
    const [inputData, setInputData] = useState(data)
    const [flag, setflag]= useState(false)

    useEffect(()=>{

    }, [flag])

    function handle(e) {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password)
        {
            alert("All fields are mandatory")
        }
        else
        {
            setflag(true)
        }
    }

    
    
    return(
        <>
        <pre>{(flag)? <h2 className="define">Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
        <form className="container" onSubmit={handlesubmit}>
            <h1 className="header">Registration</h1>
            <input type="text" placeholder="Enter your Name" autoComplete="off" 
            name="name" value={inputData.name} onChange={handle}></input>
            <input type="email" placeholder="Enter your Email" autoComplete="off" 
            name="email" value={inputData.email} onChange={handle}></input>
            <input type="password" placeholder="Enter your Password" autoComplete="off" 
            name="password" value={inputData.password} onChange={handle}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form
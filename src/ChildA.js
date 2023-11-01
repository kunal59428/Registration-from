import React from "react";
import { useState } from "react";
function ChildA(props) {
    const[fname, setfName] = useState("");
    const[lname, setlName] = useState("");
    const[email, setEmail] = useState("");
    function handlesubmit(e) {
      e.preventDefault();
      props.getData(fname + " " + lname)
      props.getData(email)
    }
    
    return (
      <form className='App' onSubmit={handlesubmit}>
        <label htmlFor="Fname">First Name</label> <br/>
        <input type='text' name='Firstname' id="Fname" value={fname} autoComplete='off' onChange={(e)=>{setfName(e.target.value)}}></input><br/>
        <label htmlFor="Lname">last Name</label> <br/>
        <input type='text' name='Lastname' id="Lname"value={lname} autoComplete='off' onChange={(e)=>{setlName(e.target.value)}}></input><br/>
        <label htmlFor="email">Email</label> <br/>
        <input type='email' name='Email' id="email"value={email} autoComplete='off' onChange={(e)=>{setEmail(e.target.value)}}></input><br/>
        <button>Submit</button>
      </form>
    );

}
export default ChildA
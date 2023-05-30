import { useEffect, useState } from "react"
import { Message } from "./message";



export const SimpleForm =() => {

    const [form,setForm]=useState(

        {
            username:"carlos",
            email:"carloslml90@gmail.com"
        }
    );

    const {username,email}= form

    const onInputChange=({target})=> {
        const{name, value}=target;
         setForm({
            ...form, 
            [name]:value

        });  console.log(name,value)

    }

useEffect(()=>{console.log("UseEffect was called!")},[]);
useEffect(()=>{console.log("UseEffect was called!")},[form]);
useEffect(()=>{console.log("UseEffect was called!")},[email]);
return (
<>
<h1>Formulario Simple</h1>

<hr />


<input 

type="text"
className="form-control mt-2 ms-4"
placeholder="Username"
name="username"
value={username}
onChange={onInputChange}
/>

<input 

type="email"
className="form-control mt-2 ms-4"
placeholder="Username"
name="email"
value={email}
onChange={onInputChange}
/>
{

   (username==="carlos")&&
<Message/>}
</>

)







}
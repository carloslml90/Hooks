
import { useForm } from "../hooks/useform";



export const SimpleFormWithCustomHook =() => {

    const {form,onInputChange, onReset}=useForm(

        {
            username:"",
            email:"",
            password:""
        }
    );

   const {username,email, password}= form;

   



return (
<>
<h1>Formulario con CUSTOM HOOK</h1>

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
<input 

type="password"
className="form-control mt-2 ms-4"
placeholder="Contraseña"
name="password"
value={password}
onChange={onInputChange}
/>

<button className="btn  btn-primary btn-lg mt-2 ms-4" onClick={onReset}>Reset</button>

</>

)







}
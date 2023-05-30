import { useState } from "react";


export const CounterApp =()=>{

    const [State, SetState]= useState({
        Counter1:10, 
        Counter2:20, 
        Counter3:30,});

        const {Counter1, Counter2, Counter3}= State


    return (
    
        <>
        
        <h1>Counter: {Counter1}</h1>
        <h1>Counter: {Counter2}</h1>
        <h1>Counter: {Counter3}</h1>

        

    <hr />
        <button  className="btn btn-danger btn-outline-warning btn-lg"  onClick={
            ()=>SetState ({
            Counter1:Counter1 + 1, Counter2:Counter2 + 10, Counter3: Counter3 + 30
        
        })
            }> +1</button>
        
        
        
        </>
    )



}


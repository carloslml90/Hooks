import { useState } from "react"


export const useCounter=(initialValue=30)=>{
    const [counter, SetCounter]= useState(initialValue)
    const Increment=(value)=> {
     
        SetCounter(counter + value)}; 
    
    const Decrement=(value)=>{
        if(counter===0) return;
        SetCounter(counter - value)};
    const Reset=() => {SetCounter(initialValue)};
    
    return {

        counter:counter,
        Increment, 
        Decrement,
        Reset,
    }

}
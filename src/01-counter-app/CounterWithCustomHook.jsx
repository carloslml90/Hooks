
import { useCounter } from "../hooks/useCounter";


export const CustomHook=()=>{

const {counter, Increment, Decrement, Reset}= useCounter();



return (
<>
    <h1>counter {counter}</h1>
    
    
    <button className="btn btn-lg btn-primary" onClick={()=>Increment(30)}> +1 </button>
    <button className="btn btn-lg btn-warning" onClick={()=>Decrement(10)}> -1 </button>
    <button className="btn btn-lg btn-secondary" onClick={Reset}> reset </button>
    

    </>
)
}
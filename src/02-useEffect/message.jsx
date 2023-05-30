import { useEffect } from "react"




export const Message=() =>{


    useEffect(()=>{
console.log('Message Mounted');

        return()=>{
            console.log('Message unMounted');
        }
    },[])

return(

    <div>usuario es el mejor </div>
)

}
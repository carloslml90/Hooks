import { useEffect, useState } from "react"

// our main component
export const useFetch =(url)  =>{

 // our usestate hook for changing app state
        const[state, setState]= useState({

        data:null,
        isLoading:true,
        hasError:null,

        })
//here we fetch API data
        const getFetch= async() =>{

            const resp= await fetch(url);
            const data= await resp.json();
            setState({data,
        isLoading:false,
        hasError:null,
            });
            console.log(data)
        }

                useEffect(()=>{

                    getFetch();
                }, [url])


                return state;

}
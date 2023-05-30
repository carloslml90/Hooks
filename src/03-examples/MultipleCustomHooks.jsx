import { useFetch } from "../hooks/useFetch"

export const MultipleHook=()=>{

// eslint-disable-next-line no-empty-pattern
const{}=useFetch('https://api.breakingbadquotes.xyz/v1/quotes/');

    return(
        <> <h1>Breaking bad Quotes</h1>
        <hr />
</>
       

    )
}
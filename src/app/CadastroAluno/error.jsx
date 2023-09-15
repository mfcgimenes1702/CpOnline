'use client'

import { useEffect } from "react"

export default function Error({error, reset}){
    useEffect(() =>{
    //log the erros to an erro repoting service
    console.error(error)
}, [error])

return (
    <div className="flex justify-center p-10 flex-col">
        <h2>Opa um erro aconteceu!</h2>
        <p>{error.message};</p>
        <div className="flex gap-3">
        <Button herf="/">
            voltar para home
        </Button> 
       
        <Button onClick={() => reset()}>
            tentar novamente
        </Button>
        </div>
    </div>
    )
}
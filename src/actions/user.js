"user server"

import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/login"

export async function apiLogin(credenciais) {
    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
            "Content-type": "apllication/json"
        }

    }

    const resp = await fetch(url,options)

    if(resp.status !== 200) return {error: "usuário ou senha inválidos"}

    const json = await resp.json()

    cookies().set("cpoline_token", json.token, {
        
        maxAge: 60 * 60 * 24 * 2
    
    }) 
    
}

export async function apiLogout(){
    cookies().delete('cpoline_token')
}
'use server'
import { revalidatePath } from "next/cache"
import {getContas} from "@actions/CadastrarAluno"

const url = process.env.NETX_PUBLIC_BASE_URL + "aluno/"

export async function create(formData) {
    
    const data = Object.fromEntries(formData)
    console.log(data)

    if (data.senha !== data.confirmacao)
        return { error: "Erro ao cadastrar: Confirmação de senha não está correta" }

    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, config)
    console.log(resp)

    if (resp.status !== 201) {
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += "." + erro.message, "")
        return { error: "Erro ao cadastrar: " + JSON.stringify(mensagens) }
    }

    revalidatePath("/CadastrarAluno")
    return { ok: "Conta cadastrada com sucesso" }
}

export async function getCadastro() {
    const response = await fetch(url, { next: { revalidate: 3600 } })
    return response.json()
  }
'use server'
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "aluno/"

export async function create(formData) {

    const data = Object.fromEntries(formData)

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

    if (resp.status !== 201) {
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += "." + erro.message, "")
        return { error: "Erro ao cadastrar: " + JSON.stringify(mensagens) }
    }

    revalidatePath("/CadastrarAluno")
    return { ok: "Conta cadastrada com sucesso" }
}

export async function getCadastro() {
    const token = cookies.get("cponline_token")
    const options = {
        headers:{ 
            "Authorization": 'Bearer ${token.value}'

        }
    }
    const response = await fetch(url, options)

    if(response.status !== 200) throw new Error("Não pode carrergar os dados")

    return await response.json()
}

export async function destroy(id) {
    const deleteUrl = url + id
    const options = {
        method: "DELETE"
    }

    const response = fetch(deleteUrl, options)

    if (!response.ok) {
        return { error: "Falha ao apagar o Aluno. Verifique se existem dados. " }
    }

    revalidatePath("/CadastrarAluno")
}

export async function getAluno(id) {
    const getUrl = url + id
    const response = await fetch(getUrl)

    const json = await response.json()

    if (!response.ok) {
        return { error: "Falha ao carregar aluno." + json.mensage }
    }

    return json
}

export async function update(aluno) {

    const updateUrl = url + aluno.id

    const options = {
        method: "PUT",
        body: JSON.stringify(aluno),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(updateUrl, options)

    if (!response.ok) {
        return { error: "Erro ao atualizar." }
    }
    revalidatePath("/CadastrarAluno")

    return { ok: "Aluno Alterado com sucesso." }


    
}
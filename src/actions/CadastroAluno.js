'use server'
import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "aluno/"

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
    await new Promise(r => setTimeout(r, 5000))
    const response = await fetch(url, { next: { revalidate: 3600 } })
    return response.json()
}

export async function destroy(id){
    const deleteUrl = url + "/" + id
    const options = {
        method: "DELETE"
    }

    fetch(deleteUrl, options)
    if(!response.ok){
        const json = await response.json()
        return {error: "Falha ao apagar o Aluno. Verifique se existem dados. "}
    }

    revalidatePath("/aluno")
}

export async function getCadastro(id){
    const getUrl = url + "/" + id
    const response = await fetch(getUrl)
    
    const json = await response.json()

    if(!response.ok){
    return {error: "Falha ao carregar aluno." + json.mensage}
    }

    return json
}

export async function update(aluno){
    
    const updateUrl = url + "/" + aluno.id

    const options = {
        method: "POST",
        body: JSON.stringify(aluno),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(updateUrl, options)

    if(!response.ok){
        const json = await response.json
    return {error: "Erro ao atualizar." + json.mensage}
}
revalidatePath("/aluno")

return {ok: "Aluno Alterado com sucesso." + mensage}


}
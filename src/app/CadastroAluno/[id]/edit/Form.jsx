"use client"

import TextInput from "@/components/TextInput"
import Button from "@/components/Button"
import { useState } from "react"
import { update } from "@/actions/CadastroAluno"

export default function FormEdit({ aluno }) {

    const [alunoEdit, setAlunoEdit] = useState(aluno)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    function handleFieldChange(field, value) {
        setAlunoEdit({
            ...alunoEdit,
            [field]: value
        })
    }

    async function handleSubmit() {

        const response = await update(alunoEdit)
        if (response?.error) {
            setError(response.error)
            return
        }

        if (response?.ok) {
            setSuccess(response.ok)
            return
        }
    }

    return (
        <form action={handleSubmit}>
            <TextInput nome="nome"
                id="nome"
                label="Nome"
                defaultValue={alunoEdit.nome}
                onChange={e => handleFieldChange("nome", e.target.value)}
            />

            <TextInput nome="email"
                id="e-mail"
                label="E-mail"
                defaultValue={alunoEdit.email}
                onChange={e => handleFieldChange("email", e.target.value)}
            />

            <TextInput nome="senha"
                id="senha"
                label="Senha"
                defaultValue={alunoEdit.senha}
                onChange={e => handleFieldChange("senha", e.target.value)}
            />

            <TextInput nome="instituicao"
                id="instituição"
                label="Instituição"
                defaultValue={alunoEdit.instituicao}
                onChange={e => handleFieldChange("instituicao", e.target.value)}
            />

            <div>
                <button className="bg-blue-500 px-6 py-2 rounded text-white font-bold hover:bg-blue-400 transition-colors">
                    Editar Aluno
                </button>
            </div>
            <p className="text-red-700">{error}</p>
            <p className="text-green-700">{success}</p>

        </form>
    )

}


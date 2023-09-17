"use client"

import TextInput from "@/components/TextInput"
import Button from "@/components/Button"
import { useState } from "react"
import { update } from "@/actions/CadastroAluno"

export default function FormEdit({aluno}){
    cont[alunoEdit, setAlunoEdit]=useState(aluno)
    const[error, setError] = useState("")
    
    function handleFieldChange(field, value){
        setAlunoEdit({
            ...alunoEdit,
            [field]:value})

    }

    async function handleSubmit(){
            
            const response = await update(alunoEdit)
            if(response?.error){
                setError(response.error)
                return

            }
    }
    return (
        <form action={handleSubmit}>
            <TextInput nome="nome"
             id="nome"
             label="Nome" 
             value={alunoEdit.nome}
             onChange={e => handleFieldChange("nome", e.target.valeu)}
             />
            <TextInput nome="email" 
            id="e-mail" 
            label="E-mail" 
            value={alunoEdit.email}
            onChange={e => handleFieldChange("email", e.target.valeu)}
            />
            <TextInput nome="senha" 
            id="senha" 
            label="Senha" 
            value={alunoEdit.senha}
            onChange={e => handleFieldChange("senha", e.target.valeu)}
            />
            <TextInput nome="confirmacao" 
            id="confirmação de senha" 
            label="Confirmação de senha" 
            value={alunoEdit.confirmacao}
            onChange={e => handleFieldChange("confirmacao", e.target.valeu)}
             />
            <TextInput nome="instituicao" 
            id="instituição" 
            label="Instituição" 
            value={alunoEdit.instituicao} 
            onChange={e => handleFieldChange("instituicao", e.target.valeu)}
            />

            <div>
              <button href="/CadastroAluno" className="bg-blue-500 px-6 py-2 rounded text-white font-bold hover:bg-blue-400 transition-colors">
                 Cadastrar Aluno
              </button>
            </div>
            <p className="text-red-700">{error}</p>
                     
        </form>          
    )

}

    
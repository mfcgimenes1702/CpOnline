"use client"

import { create } from "@/actions/CadastroAluno";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function FormCadastro(){
    const[message, setMessage] = useState("")

    async function handleSubmit (formData){
        const resp = await create(formData)

        if(resp?.error){
            setMessage(resp.error)
            return
        }
        redirect("/CadastroAluno")
    }

    
    return(
        <>

        <NavBar active={"CadastoAluno"}/>

        <main className="bg-slate-300 m-20 p-8 rounded">
            <h2 className="text-xl flex justify-center">Cadastro Aluno</h2>
                       
            <form action={handleSubmit}>
                <TextInput nome="nome" id="nome" label="Nome"/>
                <TextInput nome="email" id="e-mail" label="E-mail"/>
                <TextInput nome="senha" id="senha" label="Senha"/>
                <TextInput nome="confirmacao" id="confirmação de senha" label="Confirmação de senha"/>
                <TextInput nome="instituicao" id="instituição" label="Instituição"/>

                <div>
                    <button className="bg-blue-500 px-6 py-2 rounded text-white font-bold hover:bg-blue-400 transition-colors">
                        Cadastrar Aluno
                    </button>
                </div>
                <p>{message}</p>
          
            </form>
            
        </main>

        </>
    )

}
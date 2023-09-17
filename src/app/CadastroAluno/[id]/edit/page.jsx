"use client"

import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import FormEdit from "./Form";



export default async function FormCadastroEdit({params}){
    
    const aluno = await getAluno(params.id)
 

    return(
        <>

        <NavBar active={"CadastoAluno"}/>

        <main className="bg-slate-300 m-20 p-8 rounded">
            <h2 className="text-xl flex justify-center">Editar Aluno</h2>
                       
            <Form aluno={aluno}/>
                
            
        </main>

        </>
    )

}
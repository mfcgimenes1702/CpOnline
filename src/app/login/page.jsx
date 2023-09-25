import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { AuthContext } from "@/context/AuthContext";
import loginimage from'@/images/login.jpeg'
import { useContext } from "react";
import { useForm } from "react-hook-form"

export default function Login(){
    const{register,handlesumit} = useForm()
    const {login} = useContext(AuthContext)
   
    const onSubmit = (data) => {
        console.log(data) 
        login(data)
    }
    return(
        <div className='flex h-screen'>
            <aside className="hiddeb lg:flex">
                 <Image 
                    src={loginimage} 
                    alt="imagem de uma prova" 
                    className = 'h-auto w-auto object-cover'/>
           </aside> 
           <main className="flex items-center justify-center h-screen w-full">
            <h1 className=" text-5x1 font-bold"> CP Oline</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput register={register} name="email" label="e-mail"/>
                <TextInput register={register} name="senha" label="senha" type="password"/>
                <Button element="button">Entrar</Button>   
            </form>
           </main>
        </div>

    )
}
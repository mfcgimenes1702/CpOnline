import { getAluno } from "@/actions/CadastroAluno";
import CardAluno from "@/components/CardAluno";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default async function Home() {

  const aluno = await getAluno

  return (
    <>
      <NavBar />

      <main className="bg-slate-300 m-20 p-8">
        <h2>Home</h2>
      
      <div className=" grid grid-cols-3 gap-5 p-5 overflow-x-scroll">
        {aluno.map(aluno => <CardAluno key={aluno.id} aluno={aluno}/>)}
        
      </div>

      </main>
    </>

  )
}

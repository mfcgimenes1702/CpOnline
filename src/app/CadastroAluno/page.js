import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCadastro } from "@/actions/CadastroAluno";

export default async function CadastroAluno() {
  const data = await getCadastro()

  return (
    <>
      <NavBar active={"Cadastro"} />

      <main className="bg-slate-300 m-20 p-8 rounded">
        <h2 className="text-xl flex justify-center">Cadastro Aluno</h2>
        <Link href="/CadastroAluno/new" className="bg-blue-500 px-6 py-2 rounded text-white font-bold hover:bg-blue-400 transition-colors">
          Criar Cadastro
        </Link>

        <div>
          <div id="data">
            {data._embedded.entityModelList.map(aluno => {
              return <DataRow key={aluno.id} aluno={aluno} />
            })}
          </div>
        </div>
      </main>
    </>

  )
}

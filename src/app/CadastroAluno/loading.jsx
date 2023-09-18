import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCadastro } from "@/actions/CadastroAluno";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  const data = Array(3).fill({})

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
            <h2>Carregando...</h2>
            {data.map(() => {
              return (
                <div id="data-row" className="flex items-center justify-between hover:bg-slate-400 p-2 my-2 cursor-pointer rounded text-gray-700" >
                  <div className="flex gap-3">
                    <Skeleton className="h-6 w-6" rounded-full />
                    <Skeleton className="h-6 w-6 bg-slate-600" />
                    <div id="data-row" className="flex items-center justify-between hover:bg-slate-400 p-2 my-2 cursor-pointer rounded text-gray-700" >
                      <Skeleton className="h-6 w-6 bg-slate-600" />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>

  )
}

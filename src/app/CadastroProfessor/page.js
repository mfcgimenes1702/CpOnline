import DropMenu from "@/components/DropMenu";
import NavBar from "@/components/NavBar";
import { CheckIcon } from '@heroicons/react/24/solid'
import { Button, Checkbox } from "@mui/material";

export default function CadastroProfessor() {
  return (
    <>
      <NavBar />

      <main className="bg-slate-300 m-20 p-8 rounded">
      <h2 className="text-xl flex justify-center">Cadastro Proferssor</h2>

     <div>
      <div id="data">
       <div id="data-row">
        <div className="flex justify-between hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>Nome:</span>
          <DropMenu />
        </div>

        <div className="flex justify-between hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>E-mail:</span> 
          <DropMenu />
        </div>

        <div className="flex justify-between hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>Senha</span>
          <span>Confirmação de Senha</span>
          </div>

          <div className="hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>Instituição</span>
          </div>

          <div className="flex gap-10 hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <Checkbox/>
          <span >Proferssor</span>
          <Checkbox/>
             <span>Aluno</span>
          </div>

          <div className="flex justify-end focus:bg-slate-200 p-2 my-4 cursor-pointer rounded  ">
          <Button />
          </div>
       </div>
      </div>
     </div>
    </main>
  </>
    
  )
}

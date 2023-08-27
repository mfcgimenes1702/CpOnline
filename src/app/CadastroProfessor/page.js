import NavBar from "@/components/NavBar";

export default function CadastroProfessor() {
  return (
    <>
      <NavBar />

      <main className="bg-slate-300 m-20 p-8 rounded">
      <h2 className="text-xl flex justify-center">Cadastro Proferssor</h2>

     <div>
      <div id="data">
       <div id="data-row">
        <div className="hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>Nome:</span> 
        </div>
        <div className="hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>E-mail:</span> 
        </div>
        <div className="flex justify-between hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>Senha</span>
          <span>Confirmação de Senha</span>
          </div>
          <div className="hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <span>Instituição</span>
          </div> 
          <div className="flex justify-between hover:bg-slate-200 p-2 my-4 cursor-pointer rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span >Proferssor</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <span>Aluno</span>
          </div>
          <div className="flex justify-end hover:bg-slate-200 p-2 my-4 cursor-pointer rounded  ">
          <span>Criar Cadastro</span>
          </div>
       </div>
      </div>
     </div>
    </main>
  </>
    
  )
}

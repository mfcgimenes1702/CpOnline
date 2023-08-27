
import NavBar from "@/components/NavBar";


export default function CadastroAluno() {
  return (

<>
  <NavBar/>

    <main className="bg-slate-300 m-20 p-8">
      <h2 className="text-xl flex justify-center">Cadastro Aluno</h2>

     <div>
      <div id="data">
       <div id="data-row">
        <div>
          <span>Nome</span> 
        </div>
        <div>
          <span>E-mail</span> 
        </div>
        <div>
          <span>Senha</span>
          </div>
          <div>
          <span>Confirmação de Senha</span>
          </div>
          <div>
          <span>Instituição</span>
          </div> 
          <div>
          <span>i</span>
          <span>Proferssor</span>
          <span>i</span>
          <span>Aluno</span>
          <span>i</span>
          <span>Criar Cadastro</span>
          </div> 
       </div>
      </div>
     </div>
    </main>
  </>
    
  )
}

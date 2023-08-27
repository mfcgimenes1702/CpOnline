import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getCadastro(){
  const url ="http://localhost:8080/api/aluno"
  const response = await fetch(url, {next:{ revalidate: 0}})
  return response.json()
}

export default async function CadastroAluno() {
  const data = await getCadastro()
    
  return (
    <>
      <NavBar active={"Cadastro"}/>

      <main className="bg-slate-300 m-20 p-8 rounded">
      <h2 className="text-xl flex justify-center">Cadastro Aluno</h2>

     <div>
      <div id="data">
       {data.map(Cadastro =>{
        return <DataRow Cadastro={Cadastro}/>
       })}
      </div>
     </div>
    </main>
  </>
    
  )
}

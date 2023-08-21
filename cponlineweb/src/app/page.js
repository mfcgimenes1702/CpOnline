

export default function Home() {
  return (

    <nav className="flex justify-between items-center bg-slate-200 px-6 py-4">
      <ul className="flex gap-20 items-end">
        <li>
          <a href="#">
            <h1 className="text-2x1 text-slate-950">
          CpOnline
          </h1>
          </a>
          </li>
        <li><a href="/CadastroProfessor"><h1>Cadastro Professor</h1></a></li>
        <li><a href="/CadastroAluno"><h1>Cadastro Aluno</h1></a></li>
        <li><a href="/MenuProfessor"><h1>Menu Professor</h1></a></li>
        <li><a href="/MenuAluno"><h1>Menu Aluno</h1></a></li>
        <li><a href="/GerenciarUsuario"><h1>Gerenciar Usuário</h1></a></li>


      </ul>
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <img src="https://i.pravatar.cc/100" alt="avatar do usuário"/>
      </div>
    </nav>
    
  )
}

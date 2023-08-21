import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="flex justify-between items-center bg-slate-200 px-6 py-4">
          <ul className="flex gap-20 items-end">
            <li>
                <link href="/">
                    <h1 className="text-2x1 text-slate-950">
                      CpOnline
                    </h1>
                </link>
            </li>
            <li>
                <link className= {active=="CadastroProfessor" && "text-slate-300"} href="/CadastroProfessor">
                    Cadasto Professor
                </link>
            </li>
            
            <li>
                <link className= {active=="CadastroAluno" && "text-slate-300"} href="/CadastroAluno">
                    Cadasto Aluno
                </link>
            </li>

            <li>
                <link className= {active=="MenuProfessor" && "text-slate-300"} href="/MenuProfessor">
                    Menu Professor
                </link>
            </li>

            <li>
                <link className= {active=="MenuAluno" && "text-slate-300"} href="/MenuAluno">
                    Menu Aluno
                </link>
            </li>

            <li>
                <link className= {active=="GereciarUsuario" && "text-slate-300"} href="/GerenciarUsuario">
                    Gerenciar Usuário
                </link>
            </li>  


          </ul>

          <div className="h-12 w-12 rounded-full overflow-hidden">
           <img src="https://i.pravatar.cc/100" alt="avatar do usuário"/>
          </div>
      </nav>
            )
      }
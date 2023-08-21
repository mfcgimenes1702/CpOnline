'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar({ active }) {

    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-center bg-slate-200 px-6 py-4">
            <ul className="flex gap-20 items-center">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-black text-slate-950">
                            CpOnline
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link
                        className={`text-base ${pathname.includes("/CadastroProfessor") ? 'text-black font-semibold' : 'text-gray-500 font-normal'}`}
                        href="/CadastroProfessor"
                    >
                        Cadasto Professor
                    </Link>
                </li>

                <li>
                    <Link
                        className={`text-base ${pathname.includes("/CadastroAluno") ? 'text-black font-semibold' : 'text-gray-500 font-normal'}`}
                        href="/CadastroAluno"
                    >
                        Cadasto Aluno
                    </Link>
                </li>

                <li>
                    <Link
                        className={`text-base ${pathname.includes("/MenuProfessor") ? 'text-black font-semibold' : 'text-gray-500 font-normal'}`}
                        href="/MenuProfessor"
                    >
                        Menu Professor
                    </Link>
                </li>

                <li>
                    <Link
                        className={`text-base ${pathname.includes("/MenuAluno") ? 'text-black font-semibold' : 'text-gray-500 font-normal'}`}
                        href="/MenuAluno"
                    >
                        Menu Aluno
                    </Link>
                </li>

                <li>
                    <Link
                        className={`text-base ${pathname.includes("/GerenciarUsuario") ? 'text-black font-semibold' : 'text-gray-500 font-normal'}`}
                        href="/GerenciarUsuario"
                    >
                        Gerenciar Usuário
                    </Link>
                </li>


            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}
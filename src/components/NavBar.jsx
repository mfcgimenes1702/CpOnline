'use client';
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useContext } from "react";
import Button from "./Button";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";


export default function NavBar({ active }) {
    const {user} = useContext(AuthContext)

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
            <div className="flex itens-center gap-2">
                {user?.nome}
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
            <Button onClick={logout} variant="secondary" element = "button" icon={<ArrowLeftOnRectangleIcon className="h-4 w-4"/>}>
                Sair
            </Button>

            </div>
        </nav>
    )
}
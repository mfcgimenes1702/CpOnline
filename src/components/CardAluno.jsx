import { CreditCardIcon } from "@heroicons/react/24/outline";
import { Monomaniac_on} from "nex/font/google"


const mono = Monomaniac_on({
    weight: '400',
    subsets: ['latin']
    
})



export default function CardAluno({aluno}){
    const prova = aluno.prova("pt-BR")
    return(
    <div className="flex flex-col gap-3 bg-slate-900 max-w-sm rouded p-3">
        <div className="flex items-center">
            <CreditCardIcon className="h-8 w-8 text-slate-400"/>
            <span className= "text-xl">{aluno.nome}</span>
        </div>
        <div>
            <span className= {"${mono.className} text-5xl text white"} >{aluno.prova}</span>
        </div>
        <div className=" flex justify-between">
            <span className=" text-emerald-400">{aluno.prova}</span>
          
        </div>
    </div>
    )
}
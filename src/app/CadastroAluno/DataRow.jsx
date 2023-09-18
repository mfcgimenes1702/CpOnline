
import DropMenu from "@/components/DropMenu";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function DataRow({ aluno }) {

    return (
        <div id="data-row" className="flex items-center justify-between hover:bg-slate-400 p-2 my-2 cursor-pointer rounded text-gray-700" >
            <div className="flex gap-3">
                <AcademicCapIcon className="h-6 w-6" />
                <span>{aluno?.nome}</span>
                <span>{aluno?.email}</span>
            </div>
            <div className="flex gap-1 items-center">
                <div className="text-slate-300" >
                    <DropMenu aluno={aluno} />
                </div>

            </div>
        </div>
    )
}
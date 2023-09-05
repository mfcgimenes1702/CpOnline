export default function TextInput({label, id, nome, ...props}){
    return(

        <div className="flex flex-col gap-2 my-5">
            <label className="text-slate-700 font-semibold" htmlFor={id}>{label}</label>
            <input type="text" id={id} className="bg-slate-200 rounded p-2 outline-none focus:ring-blue-600 focus:ring-1" name={nome}/>
        </div>
    )
}
import Link from "next/link";

export default function Notfound(){
    return(
        
        <main className="bg-slate-300 m-20 p-8">
        <h2>404 - Pagina não encontrada</h2>
        <Link href="/">volta para home</Link>
      </main>
    
    )
}
import { NextResponse } from 'next/server'
 
export function middleware(request) {
    if(!request.cookies.has('cponline_token'))
        return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: [
     '/CadastroAluno/:path*',
     '/CadastroProfessor/:path*',
     '/GerenciarUsuario/:path*',
  ]
}

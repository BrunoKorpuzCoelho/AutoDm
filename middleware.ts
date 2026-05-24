import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/** Enquanto o site está em desenvolvimento, só a rota raiz é acessível. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/") {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: [
    /*
     * Todas as rotas exceto ficheiros estáticos e assets do Next.js
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}

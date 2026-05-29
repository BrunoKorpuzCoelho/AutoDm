import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/** Enquanto o site está em desenvolvimento, só a rota raiz é acessível. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Nunca bloquear assets do Next.js nem ficheiros estáticos
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.png" ||
    pathname.startsWith("/hero-car") ||
    /\.(?:css|js|mjs|map|woff2?|ttf|otf|ico|png|jpe?g|gif|webp|svg|mp4)$/i.test(
      pathname
    )
  ) {
    return NextResponse.next()
  }

  if (pathname === "/") {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|icon\\.png|.*\\..*).*)"],
}

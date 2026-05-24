"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Auto DM"
              width={48}
              height={48}
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <Link 
              href="/carros" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Carros
            </Link>
            <Link 
              href="/como-funciona" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </Link>
            <Link 
              href="/sobre-nos" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </Link>
            <Link 
              href="/contacto" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favoritos</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <User className="h-5 w-5" />
              <span className="sr-only">Conta</span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Phone className="h-4 w-4" />
              <span>Ligar Agora</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/carros" 
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Carros
              </Link>
              <Link 
                href="/como-funciona" 
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link 
                href="/sobre-nos" 
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                href="/contacto" 
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button variant="outline" className="flex-1 gap-2">
                  <Heart className="h-4 w-4" />
                  Favoritos
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Phone className="h-4 w-4" />
                  Ligar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

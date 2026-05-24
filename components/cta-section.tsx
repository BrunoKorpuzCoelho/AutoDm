"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
                Quer Vender o Seu Carro?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
                Avaliamos o seu carro em 24 horas e fazemos-lhe a melhor oferta. Processo simples, rápido e sem compromisso.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="O seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0"
                    required
                  />
                  <Button 
                    type="submit"
                    className="h-12 px-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
                  >
                    Avaliar Carro
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Obrigado! Entraremos em contacto brevemente.</p>
                </div>
              )}

              <p className="mt-4 text-sm text-primary-foreground/60">
                Ao submeter, concorda com os nossos termos de privacidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { HeroBackground } from "@/components/hero-background"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex flex-col">
        <section className="relative flex flex-col items-center justify-center px-4 pb-16 md:pb-24 pt-40 sm:pt-48 md:pt-56 min-h-[min(70vh,520px)]">
          <HeroBackground />
          <div className="absolute inset-x-0 top-4 sm:top-6 z-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto flex justify-start">
              <Image
                src="/logo.png"
                alt="Auto DM"
                width={280}
                height={320}
                priority
                className="h-36 sm:h-44 md:h-52 w-auto drop-shadow-lg"
              />
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium border border-border/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Em Desenvolvimento
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance drop-shadow-sm">
              Estamos a Preparar Algo Especial
            </h1>

            <p className="text-lg text-foreground/80 max-w-xl mx-auto text-pretty">
              Estamos a trabalhar no desenvolvimento do nosso website.
              Futuramente irão existir novidades incríveis para si.
              Até lá, contacte-nos pelos dados abaixo.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <div className="px-4 pb-12">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-6 text-left space-y-3 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone</p>
                <a href="tel:+351963761376" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  +351 963 761 376
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-left space-y-3 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:auto.dm.automoveis@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  auto.dm.automoveis@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-left space-y-3 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Morada</p>
                <p className="text-lg font-semibold text-foreground">
                  Rua 25 de Abril<br />
                  Porta 43B<br />
                  <span className="text-base font-normal text-muted-foreground">2710-678 Sintra, Cabriz</span>
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-left space-y-3 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Horário</p>
                <p className="text-lg font-semibold text-foreground">
                  Por marcação
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <div className="rounded-xl overflow-hidden border border-border h-[300px] md:h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Rua+25+de+Abril+43B+2710-678+Sintra+Cabriz+Portugal&hl=pt&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Auto DM"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border bg-secondary">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Auto DM. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito por{" "}
            <a 
              href="https://www.cubixone.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Cubix
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

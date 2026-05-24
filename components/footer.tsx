import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Auto DM"
                width={80}
                height={80}
                className="h-20 w-auto bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              A sua confiança é o nosso motor. Há mais de 10 anos a ajudar portugueses a encontrar o carro ideal.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground/70 hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/carros" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Ver Todos os Carros
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/financiamento" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Financiamento
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Garantia
                </Link>
              </li>
              <li>
                <Link href="/vender" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Vender o Meu Carro
                </Link>
              </li>
            </ul>
          </div>

          {/* Apoio ao Cliente */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Apoio ao Cliente</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Termos e Condições
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/70">
                  Av. da Liberdade, 123<br />
                  1250-140 Lisboa
                </span>
              </li>
              <li>
                <a 
                  href="tel:+351963761376" 
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  +351 963 761 376
                </a>
              </li>
              <li>
                <a 
                  href="mailto:auto.dm.automoveis@gmail.com" 
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  auto.dm.automoveis@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <h3 className="text-lg font-semibold mb-4">Onde Estamos</h3>
          <div className="rounded-xl overflow-hidden border border-secondary-foreground/10 h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2298413246697!2d-9.146592!3d38.716587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347fda4c90b1%3A0x8e2c1b3bba5e8d0!2sAv.%20da%20Liberdade%2C%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1716100000000!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Auto DM"
            />
          </div>
          <p className="text-sm text-secondary-foreground/50 mt-3">
            Av. da Liberdade, 123 - 1250-140 Lisboa
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} Auto DM. Todos os direitos reservados.
            </p>
            <p className="text-sm text-secondary-foreground/50">
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
        </div>
      </div>
    </footer>
  )
}

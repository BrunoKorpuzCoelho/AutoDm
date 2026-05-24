import Link from "next/link"
import { Search, FileCheck, Truck, Key } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Pesquise",
    description: "Explore o nosso catálogo de centenas de carros seminovos certificados."
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Escolha",
    description: "Compare modelos, veja históricos e encontre o carro perfeito para si."
  },
  {
    number: "03",
    icon: Truck,
    title: "Financie",
    description: "Simule o financiamento online e obtenha aprovação em minutos."
  },
  {
    number: "04",
    icon: Key,
    title: "Receba",
    description: "Entregamos o seu carro em casa com toda a documentação tratada."
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Como Funciona
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70 max-w-2xl mx-auto text-pretty">
            Comprar carro nunca foi tão fácil. Em 4 passos simples, o seu próximo carro está à sua porta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-primary/30" />
              )}
              
              <div className="relative bg-secondary-foreground/5 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-primary/30">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/carros"
            className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </section>
  )
}

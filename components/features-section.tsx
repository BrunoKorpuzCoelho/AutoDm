import { Shield, Truck, CreditCard, Award, RefreshCw, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia até 36 Meses",
    description: "Todos os nossos veículos incluem garantia extensiva para a sua tranquilidade."
  },
  {
    icon: Truck,
    title: "Entrega em Casa",
    description: "Entregamos o seu carro em qualquer ponto de Portugal continental sem custos adicionais."
  },
  {
    icon: CreditCard,
    title: "Financiamento Facilitado",
    description: "Soluções de financiamento personalizadas com as melhores taxas do mercado."
  },
  {
    icon: Award,
    title: "Veículos Certificados",
    description: "Inspeção rigorosa de 150 pontos em todos os veículos antes da venda."
  },
  {
    icon: RefreshCw,
    title: "7 Dias para Devolver",
    description: "Se não estiver satisfeito, tem 7 dias para devolver o carro sem questões."
  },
  {
    icon: Headphones,
    title: "Apoio 24/7",
    description: "Equipa de suporte disponível todos os dias para ajudá-lo no que precisar."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Porque Escolher a Auto DM?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma experiência de compra única, com transparência total e serviços exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

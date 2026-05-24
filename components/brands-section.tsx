import Link from "next/link"
import Image from "next/image"

const brands = [
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/800px-BMW.svg.png" },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png" },
  { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/800px-Audi-Logo_2016.svg.png" },
  { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/800px-Volkswagen_logo_2019.svg.png" },
  { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_logo.svg/800px-Toyota_logo.svg.png" },
  { name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Volvo_Cars_logo_with_wordmark.svg/800px-Volvo_Cars_logo_with_wordmark.svg.png" },
]

export function BrandsSection() {
  return (
    <section className="py-12 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trabalhamos com as melhores marcas do mercado
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/carros?marca=${encodeURIComponent(brand.name)}`}
              className="group flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="sr-only">{brand.name}</span>
              <div className="text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

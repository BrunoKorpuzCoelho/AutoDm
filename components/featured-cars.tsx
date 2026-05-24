import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CarCard } from "@/components/car-card"
import { cars } from "@/lib/cars-data"

export function FeaturedCars() {
  const featuredCars = cars.filter(car => car.isFeatured).slice(0, 4)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Carros em Destaque
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Seleção especial dos melhores veículos disponíveis
            </p>
          </div>
          <Button asChild variant="ghost" className="text-primary hover:text-primary/90 gap-2 w-fit">
            <Link href="/carros">
              Ver Todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}

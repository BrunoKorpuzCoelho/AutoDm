"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brands, fuelTypes } from "@/lib/cars-data"

export function HeroSearch() {
  const router = useRouter()
  const [brand, setBrand] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [fuel, setFuel] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (brand) params.set("marca", brand)
    if (priceRange) params.set("preco", priceRange)
    if (fuel) params.set("combustivel", fuel)
    router.push(`/carros?${params.toString()}`)
  }

  return (
    <div className="bg-card rounded-xl shadow-2xl p-4 md:p-6 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Brand Select */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Marca
          </label>
          <div className="relative">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-muted rounded-lg text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todas as marcas</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Price Range Select */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Preço até
          </label>
          <div className="relative">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-muted rounded-lg text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Qualquer preço</option>
              <option value="15000">Até 15.000€</option>
              <option value="25000">Até 25.000€</option>
              <option value="35000">Até 35.000€</option>
              <option value="50000">Até 50.000€</option>
              <option value="75000">Até 75.000€</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Fuel Type Select */}
        <div className="relative">
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Combustível
          </label>
          <div className="relative">
            <select
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="w-full h-11 px-3 pr-10 bg-muted rounded-lg text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todos</option>
              {fuelTypes.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button 
            onClick={handleSearch}
            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base font-semibold"
          >
            <Search className="h-5 w-5" />
            Pesquisar
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">250+</span>
          <span className="text-muted-foreground">Carros em Stock</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">100%</span>
          <span className="text-muted-foreground">Certificados</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">24</span>
          <span className="text-muted-foreground">Meses Garantia</span>
        </div>
      </div>
    </div>
  )
}

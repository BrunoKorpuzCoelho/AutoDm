"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CarCard } from "@/components/car-card"
import { cars, brands, fuelTypes, locations } from "@/lib/cars-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { 
  SlidersHorizontal, 
  X, 
  Search, 
  ChevronDown,
  Grid3X3,
  LayoutList
} from "lucide-react"

export default function CarrosPage() {
  return (
    <Suspense fallback={<CarrosLoadingFallback />}>
      <CarrosPageContent />
    </Suspense>
  )
}

function CarrosLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse text-muted-foreground">A carregar...</div>
    </div>
  )
}

function CarrosPageContent() {
  const searchParams = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  
  // Filters state
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("marca") || "")
  const [selectedFuel, setSelectedFuel] = useState(searchParams.get("combustivel") || "")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])
  const [yearRange, setYearRange] = useState<[number, number]>([2018, 2024])
  const [sortBy, setSortBy] = useState("featured")

  // Filter cars
  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch = 
          car.brand.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }
      
      // Brand filter
      if (selectedBrand && car.brand !== selectedBrand) return false
      
      // Fuel filter
      if (selectedFuel && car.fuel !== selectedFuel) return false
      
      // Location filter
      if (selectedLocation && car.location !== selectedLocation) return false
      
      // Price range
      if (car.price < priceRange[0] || car.price > priceRange[1]) return false
      
      // Year range
      if (car.year < yearRange[0] || car.year > yearRange[1]) return false
      
      return true
    })

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage)
        break
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }

    return result
  }, [searchQuery, selectedBrand, selectedFuel, selectedLocation, priceRange, yearRange, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedBrand("")
    setSelectedFuel("")
    setSelectedLocation("")
    setPriceRange([0, 100000])
    setYearRange([2018, 2024])
  }

  const activeFiltersCount = [
    selectedBrand,
    selectedFuel,
    selectedLocation,
    priceRange[0] > 0 || priceRange[1] < 100000,
    yearRange[0] > 2018 || yearRange[1] < 2024
  ].filter(Boolean).length

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-secondary text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Carros Disponíveis
            </h1>
            <p className="mt-2 text-secondary-foreground/70">
              {filteredCars.length} veículos encontrados
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Pesquisar marca ou modelo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </Button>

            {/* Sort & View */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-11 px-4 pr-10 bg-muted rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Destaques</option>
                  <option value="price-asc">Preço: Menor primeiro</option>
                  <option value="price-desc">Preço: Maior primeiro</option>
                  <option value="year-desc">Ano: Mais recente</option>
                  <option value="mileage-asc">Km: Menor primeiro</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>

              <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                  aria-label="Vista em grelha"
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                  aria-label="Vista em lista"
                >
                  <LayoutList className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`
              fixed md:relative inset-0 md:inset-auto z-50 md:z-0
              w-full md:w-64 lg:w-72 flex-shrink-0
              bg-background md:bg-transparent
              ${isFilterOpen ? "block" : "hidden md:block"}
            `}>
              <div className="h-full md:h-auto overflow-y-auto md:overflow-visible p-4 md:p-0">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Brand Filter */}
                  <FilterSection title="Marca">
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full h-10 px-3 bg-muted rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Todas as marcas</option>
                      {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* Fuel Filter */}
                  <FilterSection title="Combustível">
                    <div className="flex flex-wrap gap-2">
                      <FilterChip
                        label="Todos"
                        isActive={!selectedFuel}
                        onClick={() => setSelectedFuel("")}
                      />
                      {fuelTypes.map(fuel => (
                        <FilterChip
                          key={fuel}
                          label={fuel}
                          isActive={selectedFuel === fuel}
                          onClick={() => setSelectedFuel(fuel)}
                        />
                      ))}
                    </div>
                  </FilterSection>

                  {/* Location Filter */}
                  <FilterSection title="Localização">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full h-10 px-3 bg-muted rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Qualquer localização</option>
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </FilterSection>

                  {/* Price Range */}
                  <FilterSection title="Preço">
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        min={0}
                        max={100000}
                        step={1000}
                        className="mb-4"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0].toLocaleString()}€</span>
                        <span>{priceRange[1].toLocaleString()}€</span>
                      </div>
                    </div>
                  </FilterSection>

                  {/* Year Range */}
                  <FilterSection title="Ano">
                    <div className="px-2">
                      <Slider
                        value={yearRange}
                        onValueChange={(value) => setYearRange(value as [number, number])}
                        min={2018}
                        max={2024}
                        step={1}
                        className="mb-4"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{yearRange[0]}</span>
                        <span>{yearRange[1]}</span>
                      </div>
                    </div>
                  </FilterSection>

                  {/* Clear Filters */}
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full"
                    >
                      Limpar Filtros
                    </Button>
                  )}

                  {/* Apply (Mobile) */}
                  <Button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full md:hidden bg-primary text-primary-foreground"
                  >
                    Ver {filteredCars.length} resultados
                  </Button>
                </div>
              </div>
            </aside>

            {/* Cars Grid */}
            <div className="flex-1">
              {filteredCars.length > 0 ? (
                <div className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }>
                  {filteredCars.map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">
                    Nenhum carro encontrado com os filtros selecionados.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
      {children}
    </div>
  )
}

function FilterChip({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-muted text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  )
}

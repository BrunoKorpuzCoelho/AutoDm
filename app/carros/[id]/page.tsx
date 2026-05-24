"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cars } from "@/lib/cars-data"
import {
  ArrowLeft,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  MapPin,
  Users,
  DoorOpen,
  Shield,
  Check,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

interface CarPageProps {
  params: Promise<{ id: string }>
}

export default function CarDetailsPage({ params }: CarPageProps) {
  const { id } = use(params)
  const car = cars.find(c => c.id === id)
  
  if (!car) {
    notFound()
  }

  return <CarDetailsContent car={car} />
}

function CarDetailsContent({ car }: { car: NonNullable<ReturnType<typeof cars.find>> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('pt-PT').format(mileage)
  }

  const monthlyPayment = Math.round(car.price / 60)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/carros" className="text-muted-foreground hover:text-primary flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{car.brand} {car.model}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <Image
                  src={car.images[currentImageIndex] || car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation Arrows */}
                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === 0 ? car.images.length - 1 : prev - 1
                      )}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === car.images.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {car.isNew && (
                    <Badge className="bg-primary text-primary-foreground">
                      Novo em Stock
                    </Badge>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {car.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {car.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                        index === currentImageIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${car.brand} ${car.model} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Car Details */}
            <div>
              {/* Title & Price */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {car.brand} {car.model}
                  </h1>
                  <p className="text-muted-foreground mt-1">{car.year} • {formatMileage(car.mileage)} km</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                    aria-label="Adicionar aos favoritos"
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Partilhar">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Price */}
              <div className="mt-6 p-4 bg-muted rounded-xl">
                <p className="text-3xl font-bold text-primary">{formatPrice(car.price)}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ou desde <span className="font-semibold text-foreground">{formatPrice(monthlyPayment)}/mês</span> com financiamento
                </p>
              </div>

              {/* Quick Specs */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <SpecItem icon={Calendar} label="Ano" value={car.year.toString()} />
                <SpecItem icon={Gauge} label="Quilómetros" value={`${formatMileage(car.mileage)} km`} />
                <SpecItem icon={Fuel} label="Combustível" value={car.fuel} />
                <SpecItem icon={Settings} label="Transmissão" value={car.transmission} />
                <SpecItem icon={DoorOpen} label="Portas" value={car.doors.toString()} />
                <SpecItem icon={Users} label="Lugares" value={car.seats.toString()} />
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base">
                  <Phone className="h-5 w-5" />
                  Ligar Agora
                </Button>
                <Button variant="outline" className="flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 text-base">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Garantia {car.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{car.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Equipment */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground mb-4">Equipamento Incluído</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financing Calculator */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Simular Financiamento</h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Valor do veículo</span>
                    <span className="font-semibold">{formatPrice(car.price)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Entrada (20%)</span>
                    <span className="font-semibold">{formatPrice(car.price * 0.2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Prazo</span>
                    <span className="font-semibold">60 meses</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Mensalidade estimada</span>
                    <span className="text-xl font-bold text-primary">{formatPrice(monthlyPayment)}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Pedir Proposta
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  *Valores indicativos. Sujeito a análise de crédito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function SpecItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
      <Icon className="h-5 w-5 text-primary flex-shrink-0" />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  )
}

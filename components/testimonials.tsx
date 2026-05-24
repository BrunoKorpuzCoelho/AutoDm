"use client"

import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    location: "Lisboa",
    car: "BMW Série 3",
    rating: 5,
    text: "Experiência incrível! Encontrei o carro que procurava em menos de uma semana. O processo foi todo online e a entrega impecável.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Maria Santos",
    location: "Porto",
    car: "Mercedes Classe A",
    rating: 5,
    text: "Recomendo a 100%. O financiamento foi aprovado no mesmo dia e recebi o carro em casa com toda a documentação tratada.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Pedro Costa",
    location: "Braga",
    car: "Audi A4 Avant",
    rating: 5,
    text: "O carro veio melhor do que nas fotos. A equipa foi sempre prestável e transparente em todo o processo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Ana Ferreira",
    location: "Faro",
    car: "Volvo XC40",
    rating: 5,
    text: "Primeira vez que compro carro online e foi uma surpresa muito positiva. Poupei tempo e dinheiro!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 5.000 clientes satisfeitos em todo o Portugal
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[activeIndex]} />
          
          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Ver testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Google Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">5.000+</p>
            <p className="text-sm text-muted-foreground mt-1">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      
      <p className="text-sm text-foreground leading-relaxed mb-4">
        {`"${testimonial.text}"`}
      </p>
      
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.car} • {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  )
}

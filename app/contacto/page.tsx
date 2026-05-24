"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Check,
  MessageCircle
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-secondary text-secondary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Entre em Contacto
            </h1>
            <p className="mt-4 text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Estamos aqui para ajudá-lo a encontrar o carro perfeito. Contacte-nos através de qualquer um dos canais abaixo.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Informações de Contacto
                </h2>
                
                <div className="space-y-6">
                  <ContactInfoItem
                    icon={MapPin}
                    title="Morada"
                    content={
                      <>
                        Av. da Liberdade, 123<br />
                        1250-140 Lisboa, Portugal
                      </>
                    }
                  />
                  <ContactInfoItem
                    icon={Phone}
                    title="Telefone"
                    content={
                      <a href="tel:+351963761376" className="hover:text-primary transition-colors">
                        +351 963 761 376
                      </a>
                    }
                  />
                  <ContactInfoItem
                    icon={MessageCircle}
                    title="WhatsApp"
                    content={
                      <a href="https://wa.me/351963761376" className="hover:text-primary transition-colors">
                        +351 963 761 376
                      </a>
                    }
                  />
                  <ContactInfoItem
                    icon={Mail}
                    title="Email"
                    content={
                      <a href="mailto:auto.dm.automoveis@gmail.com" className="hover:text-primary transition-colors">
                        auto.dm.automoveis@gmail.com
                      </a>
                    }
                  />
                  <ContactInfoItem
                    icon={Clock}
                    title="Horário"
                    content="Por marcação"
                  />
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="font-semibold mb-2">Precisa de ajuda rápida?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Ligue-nos diretamente ou envie uma mensagem pelo WhatsApp.
                </p>
                <Button 
                  asChild 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href="tel:+351963761376" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Envie-nos uma Mensagem
                </h2>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="O seu nome"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+351 963 761 376"
                          className="h-11"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Assunto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full h-11 px-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="comprar">Quero comprar um carro</option>
                          <option value="vender">Quero vender o meu carro</option>
                          <option value="financiamento">Informações sobre financiamento</option>
                          <option value="garantia">Dúvidas sobre garantia</option>
                          <option value="outro">Outro assunto</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escreva aqui a sua mensagem..."
                        className="w-full px-3 py-3 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 w-4 h-4 rounded border-input accent-primary"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        Li e aceito a{" "}
                        <a href="/privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>{" "}
                        e autorizo o contacto por parte da Auto DM.
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base"
                    >
                      <Send className="h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Obrigado pelo seu contacto. A nossa equipa irá responder-lhe brevemente.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "",
                          message: ""
                        })
                      }}
                      variant="outline"
                    >
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              A Nossa Localização
            </h2>
            <div className="bg-muted rounded-xl overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Av. da Liberdade, 123<br />
                  1250-140 Lisboa, Portugal
                </p>
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a 
                    href="https://maps.google.com/?q=Av.+da+Liberdade+123+Lisboa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ContactInfoItem({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: React.ElementType
  title: string
  content: React.ReactNode 
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <div className="text-sm text-muted-foreground mt-1">{content}</div>
      </div>
    </div>
  )
}

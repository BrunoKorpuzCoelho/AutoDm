"use client"

import { useEffect, useRef, useState } from "react"

/** Vídeo local em public/hero-car.mp4 — substitui pelo teu quando quiseres */
const VIDEO_SRC = "/hero-car.mp4"
const POSTER_SRC =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      video.play().catch(() => {
        /* autoplay bloqueado — mantém imagem de fallback */
      })
    }

    if (video.readyState >= 2) {
      play()
      setVideoReady(true)
    } else {
      video.addEventListener("loadeddata", () => {
        setVideoReady(true)
        play()
      })
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Imagem de fallback (sempre visível por baixo) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${POSTER_SRC})` }}
      />

      {/* Vídeo com blur — percebe-se o carro sem distrair */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover scale-105 blur-md transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_SRC}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Escurecimento para contraste do texto */}
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  )
}

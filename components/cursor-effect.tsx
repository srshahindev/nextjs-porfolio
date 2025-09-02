'use client'
import React, { useEffect, useRef } from 'react'

class Particle {
  lifeSpan: number
  initialLifeSpan: number
  velocity: { x: number; y: number }
  position: { x: number; y: number }
  baseDimension: number

  constructor(x: number, y: number) {
    this.initialLifeSpan = Math.floor(Math.random() * 60 + 60)
    this.lifeSpan = this.initialLifeSpan
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 + Math.random() * -1
    }
    this.position = { x, y }
    this.baseDimension = 4
  }

  update(context: CanvasRenderingContext2D) {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75
    this.velocity.y -= Math.random() / 600
    this.lifeSpan--

    const scale =
      0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan

    context.fillStyle = '#e6f1f7'
    context.strokeStyle = '#3a92c5'
    context.beginPath()
    context.arc(
      this.position.x - (this.baseDimension / 2) * scale,
      this.position.y - this.baseDimension / 2,
      this.baseDimension * scale,
      0,
      2 * Math.PI
    )
    context.stroke()
    context.fill()
    context.closePath()
  }
}

const BubbleCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const dpi = window.devicePixelRatio || 1
    canvas.width = window.innerWidth * dpi
    canvas.height = window.innerHeight * dpi
    context.scale(dpi, dpi)

    const addParticle = (x: number, y: number) => {
      if (particlesRef.current.length > 200) {
        particlesRef.current.shift()
      }
      particlesRef.current.push(new Particle(x, y))
    }

    const onMouseMove = (e: MouseEvent) => {
      addParticle(e.clientX, e.clientY)
    }

    const updateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current.forEach(p => p.update(context))
      particlesRef.current = particlesRef.current.filter(p => p.lifeSpan > 0)
    }

    const loop = () => {
      updateParticles()
      animationFrameRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove)
    loop()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className='pointer-events-none fixed inset-0 z-50'
    />
  )
}

export default BubbleCursor

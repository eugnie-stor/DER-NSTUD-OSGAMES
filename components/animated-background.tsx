"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full document height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Background image
    const bgImage = new Image()
    bgImage.src = "/images/game-background.jpg"
    bgImage.crossOrigin = "anonymous"

    // Text settings
    const texts = []
    const textCount = 15

    for (let i = 0; i < textCount; i++) {
      texts.push({
        text: "DS",
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 30 + Math.random() * 80,
        opacity: 0.03 + Math.random() * 0.08, // More subtle opacity
        speed: 0.1 + Math.random() * 0.3, // Slower movement
        direction: Math.random() > 0.5 ? 1 : -1,
      })
    }

    // Animation
    let animationFrameId: number
    let bgLoaded = false

    bgImage.onload = () => {
      bgLoaded = true
    }

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background image
      if (bgLoaded) {
        // Create a pattern that repeats vertically
        const pattern = ctx.createPattern(bgImage, "repeat")
        if (pattern) {
          ctx.fillStyle = pattern
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        // Add dark overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        // Fallback background color
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, "#0a0a0a")
        gradient.addColorStop(0.5, "#121212")
        gradient.addColorStop(1, "#0a0a0a")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Draw floating texts
      ctx.font = "bold Arial"
      ctx.textAlign = "center"

      texts.forEach((t) => {
        // Move text
        t.x += t.speed * t.direction

        // Wrap around if text goes off screen
        if (t.x > canvas.width + t.size * 5) {
          t.x = -t.size * 5
        } else if (t.x < -t.size * 5) {
          t.x = canvas.width + t.size * 5
        }

        // Draw text
        ctx.font = `bold ${t.size}px Arial`
        ctx.fillStyle = `rgba(255, 255, 255, ${t.opacity})`
        ctx.fillText(t.text, t.x, t.y)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full object-cover z-0" />
}

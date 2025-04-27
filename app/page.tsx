"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ThumbsUp, Zap, Sparkles, ArrowUp } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const homeRef = useRef<HTMLDivElement>(null)
  const gamesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Show/hide scroll to top button
      if (scrollPosition > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      // Update active section based on scroll position
      if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
        setActiveSection("contact")
      } else if (gamesRef.current && scrollPosition >= gamesRef.current.offsetTop) {
        setActiveSection("games")
      } else {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    let ref
    switch (section) {
      case "home":
        ref = homeRef
        break
      case "games":
        ref = gamesRef
        break
      case "contact":
        ref = contactRef
        break
      default:
        ref = homeRef
    }

    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
        <div className="flex gap-2 px-1 py-1 bg-black/30 backdrop-blur-md rounded-full">
          <button
            onClick={() => scrollToSection("home")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "home" ? "bg-white text-black" : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </button>
          <button
            onClick={() => scrollToSection("games")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "games" ? "bg-white text-black" : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gamepad-2"
            >
              <line x1="6" y1="11" x2="6" y2="13" />
              <line x1="4" y1="9" x2="4" y2="15" />
              <line x1="2" y1="12" x2="2" y2="12" />
              <line x1="12" y1="22" x2="12" y2="22" />
              <path d="M12 17v-1" />
              <path d="M8 22H16" />
              <rect x="8" y="2" width="8" height="14" rx="2" />
              <path d="M18 6v8" />
              <path d="M18 10h.01" />
              <path d="M22 10h.01" />
              <path d="M20 8v4" />
            </svg>
            Games
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeSection === "contact" ? "bg-white text-black" : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* DS Logo */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-700 rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <h1 className="text-8xl md:text-9xl font-bold text-white">DS</h1>
              </div>
            </div>
          </div>

          {/* Studio Info */}
          <div className="text-left max-w-md">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4">DERIN STUDIOS</h1>
            <p className="text-white/90 text-lg">
              An indie game studio located in Istanbul. According to some legends, there are also some mythological
              creatures among the team members.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Strong Bounds */}
            <div className="flex flex-col items-center text-center">
              <ThumbsUp className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-4">STRONG BOUNDS</h2>
              <p className="text-white/80">
                We respect our colleagues, reinforce each other to ensure that we maximize the value for everyone.
              </p>
            </div>

            {/* Adaptable */}
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-4">ADAPTABLE</h2>
              <p className="text-white/80">
                We learn while developing our projects and we dare ourselves to use those new methods and technologies.
              </p>
            </div>

            {/* Passionate */}
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-4">PASSIONATE</h2>
              <p className="text-white/80">
                We design games that we want to play. To reach millions, we create for one!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section ref={gamesRef} className="py-20 bg-black/70 relative">
        <div className="absolute inset-0 bg-[url('/images/game-background-2.jpg')] bg-cover bg-center opacity-30 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gamepad-2"
              >
                <line x1="6" y1="11" x2="6" y2="13" />
                <line x1="4" y1="9" x2="4" y2="15" />
                <line x1="2" y1="12" x2="2" y2="12" />
                <line x1="12" y1="22" x2="12" y2="22" />
                <path d="M12 17v-1" />
                <path d="M8 22H16" />
                <rect x="8" y="2" width="8" height="14" rx="2" />
                <path d="M18 6v8" />
                <path d="M18 10h.01" />
                <path d="M22 10h.01" />
                <path d="M20 8v4" />
              </svg>
              <h2 className="text-4xl font-bold">GAMES</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Game 1 */}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl shadow-purple-900/20">
              <div className="aspect-video bg-[url('/images/game-1.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 font-[Cinzel]">MYTHIC: TALE OF A HERO</h3>
                <p className="text-white/80 mb-4">
                  Mythic: Tale of a Hero is a fast-paced FPS game with narrative elements mixed with absurdity.
                  Narratives are based on the myths and legends which Yorick tells, as a player you experience the game
                  through the characters inside those myths.
                </p>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                  <span>Wishlist on Steam</span>
                  <span className="text-yellow-400">🔥</span>
                </button>
              </div>
            </div>

            {/* Game 2 */}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl shadow-blue-900/20">
              <div className="aspect-video bg-[url('/images/game-2.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">WHAT THE DERIN?!</h3>
                <p className="text-white/80 mb-4">
                  WHAT THE DERIN?! is a multiplayer party game where you can form quirky clown fiestas. Bring your
                  friends, create your DERINs, and get ready for a laughter-filled adventure like no other!
                </p>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors">
                  <span>Wishlist on Steam</span>
                  <span className="text-yellow-400">🔥</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-black/80 relative">
        <div className="absolute inset-0 bg-[url('/images/contact-background.jpg')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <h2 className="text-4xl font-bold">CONTACT</h2>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-white/80 text-lg">
              If you want to contact us, you can send an email to the address below.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-white text-black px-8 py-4 rounded-full text-xl font-medium">hello[at]derin.studios</div>
          </div>

          {/* Newsletter */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Subscribe to our newsletter!</h3>
            <p className="text-white/80 mb-8">
              Stay in the loop with all the latest updates about our games and team - make sure to subscribe today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="E-mail address"
                className="px-6 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 min-w-[300px]"
              />
              <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">DERIN STUDIOS</h2>
              <p className="text-white/60 text-sm">
                Copyright © {new Date().getFullYear()} Derin Studios. All rights reserved.
              </p>
              <Link href="/privacy-policy" className="text-white/60 text-sm hover:text-white">
                Privacy Policy
              </Link>
            </div>

            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Go Up Button */}
          {showScrollTop && (
            <div className="flex justify-start mt-8">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                Go Up
              </button>
            </div>
          )}
        </div>
      </footer>
    </main>
  )
}

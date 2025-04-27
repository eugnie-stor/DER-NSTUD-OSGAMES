import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"

export default function GamesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Overlay with slight darkening */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="pt-6 px-4 flex justify-center">
          <div className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-full p-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-full transition-colors"
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
            </Link>
            <Link href="/games" className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full">
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
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/10 rounded-full transition-colors"
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
            </Link>
          </div>
        </nav>

        {/* Games Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Our Games</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {/* Game Card Placeholder */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:scale-105 transition-transform"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/50">
                    Game Screenshot {i}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">Game Title {i}</h3>
                  <p className="text-white/70 text-sm mb-4">A short description of the game and its unique features.</p>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

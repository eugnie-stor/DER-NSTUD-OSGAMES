import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactPage() {
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
            <Link
              href="/games"
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
            <Link href="/contact" className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full">
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

        {/* Contact Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 max-w-md w-full">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h1>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/80 text-center">
                Or reach us at:{" "}
                <a href="mailto:contact@derinstudios.com" className="text-white underline">
                  contact@derinstudios.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

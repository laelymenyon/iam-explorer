import Image from "next/image"
import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Crypto Explorer
          </div>
          <div className="flex gap-8 items-center">
            <Link
              href="#about"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="https://x.com/mymunn18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-1.5 transition-colors hover:text-blue-600"
            >
              <Twitter className="h-3.5 w-3.5" />
              Twitter
            </Link>
            <Link
              href="https://github.com/laelymenyon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium flex items-center gap-1.5 transition-colors hover:text-purple-600"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border border-gray-200 shadow-md">
          <Image src="/profile-image.png" alt="Profile" fill className="object-cover" priority />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Web3 & Crypto Explorer</h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Exploring blockchain technology and decentralized finance
        </p>
        <div className="flex gap-4">
          <Link
            href="https://x.com/mymunn18"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            <Twitter className="h-4 w-4" />
            Twitter
          </Link>
          <Link
            href="https://github.com/laelymenyon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-gray-600 mb-4">
              I'm a crypto explorer and web3 enthusiast focused on making blockchain technology accessible to everyone.
              My goal is to share insights and discoveries about the evolving world of decentralized finance and
              blockchain applications.
            </p>
            <p className="text-gray-600">
              Through my content, I explore emerging projects, analyze market trends, and investigate the technological
              innovations shaping the future of finance and the internet.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Crypto Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

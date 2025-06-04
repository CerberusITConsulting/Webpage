"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-slate-900">Cerberus IT LLC</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4">
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Schedule Consultation</Button>
          </Link>
        </div>
        <button className="ml-4 rounded-md p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

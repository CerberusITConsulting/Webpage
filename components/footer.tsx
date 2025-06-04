import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Cerberus IT Consulting LLC</h3>
            <p className="text-gray-400">Comprehensive IT solutions for small to medium-sized businesses.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:cerberusitconsulting.llc@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Remote Data Backups
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Remote Access
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>1235 East Blvd Ste E PMB 2330</p>
              <p>Charlotte, NC 28203</p>
              <p className="pt-2">(919)-888-2316</p>
              <p>
                <a href="mailto:cerberusitconsulting.llc@gmail.com" className="hover:text-white transition-colors">
                  cerberusitconsulting.llc@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cerberus IT Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

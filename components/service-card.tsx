import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-gray-500 mb-4 flex-grow">{description}</p>
      <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

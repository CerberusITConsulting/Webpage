import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceDetailCardProps {
  icon: ReactNode
  title: string
  description: string
  benefits: string[]
}

export default function ServiceDetailCard({ icon, title, description, benefits }: ServiceDetailCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="flex-shrink-0 flex items-start justify-center md:justify-start">{icon}</div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <h4 className="text-lg font-medium mb-3 text-slate-900">Key Benefits</h4>
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>

        <Link href="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Request a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

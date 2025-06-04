import Link from "next/link"
import { ArrowRight, Shield, Server, Cpu, Zap, Cloud, Headphones, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailCard from "@/components/service-detail-card"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our IT Services
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive technology solutions designed to secure, optimize, and transform your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12">
            <ServiceDetailCard
              icon={<Server className="h-12 w-12 text-blue-600" />}
              title="Remote Data Backups"
              description="Protect your essential and private data with our comprehensive backup solutions. We implement automated, secure backup systems that ensure your critical business information is protected against data loss, hardware failure, and cyber threats."
              benefits={[
                "Automated daily backups of critical data",
                "Secure off-site storage with encryption",
                "Quick recovery options to minimize downtime",
                "Compliance with data protection regulations",
              ]}
            />

            <ServiceDetailCard
              icon={<Cpu className="h-12 w-12 text-blue-600" />}
              title="AI Automation Solutions"
              description="Streamline your business operations with intelligent automation. Our AI solutions help you automate repetitive tasks, analyze data for insights, and create more efficient workflows that save time and reduce operational costs."
              benefits={[
                "Custom automation workflows tailored to your business",
                "AI-powered data analysis and reporting",
                "Integration with existing business systems",
                "Ongoing optimization and support",
              ]}
            />

            <ServiceDetailCard
              icon={<Zap className="h-12 w-12 text-blue-600" />}
              title="Remote Access Solutions"
              description="Enable secure access to your business systems from anywhere. Our remote access solutions provide your team with the flexibility to work from any location while maintaining the security and integrity of your business data."
              benefits={[
                "Secure VPN and remote desktop configurations",
                "Multi-factor authentication for enhanced security",
                "Seamless access to company resources",
                "Support for hybrid and remote work environments",
              ]}
            />

            <ServiceDetailCard
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Cybersecurity Services"
              description="Protect your business from evolving cyber threats with our comprehensive security solutions. We implement multi-layered security measures to safeguard your data, systems, and networks from unauthorized access and cyber attacks."
              benefits={[
                "Network security assessments and monitoring",
                "Endpoint protection and threat detection",
                "Security awareness training for employees",
                "Incident response planning and support",
              ]}
            />

            <ServiceDetailCard
              icon={<Cloud className="h-12 w-12 text-blue-600" />}
              title="Cloud Solutions"
              description="Leverage the power of cloud computing to enhance your business capabilities. Our cloud solutions help you migrate to the cloud, optimize your cloud infrastructure, and take advantage of scalable, flexible computing resources."
              benefits={[
                "Cloud migration strategy and implementation",
                "Infrastructure optimization and cost management",
                "Hybrid cloud configurations",
                "Ongoing cloud management and support",
              ]}
            />

            <ServiceDetailCard
              icon={<Headphones className="h-12 w-12 text-blue-600" />}
              title="Managed IT Services"
              description="Let us handle your day-to-day IT operations so you can focus on your core business. Our managed IT services provide comprehensive support, monitoring, and maintenance for your entire IT infrastructure."
              benefits={[
                "24/7 monitoring and support",
                "Proactive maintenance and updates",
                "Help desk and technical support",
                "Strategic IT planning and consulting",
              ]}
            />

            <ServiceDetailCard
              icon={<BarChart className="h-12 w-12 text-blue-600" />}
              title="IT Consulting"
              description="Get expert guidance on technology strategy and implementation. Our IT consulting services help you make informed decisions about technology investments, digital transformation, and IT infrastructure optimization."
              benefits={[
                "Technology assessments and roadmapping",
                "Digital transformation strategy",
                "IT budget planning and optimization",
                "Vendor selection and management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Enhance Your IT Infrastructure?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a consultation today to see how our services can benefit your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

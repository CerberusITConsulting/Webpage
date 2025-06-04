import Link from "next/link"
import { ArrowRight, Shield, Server, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import Section from "@/components/section" // Declare the Section variable

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  IT Solutions Tailored for Your Business
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Cerberus IT Consulting LLC provides comprehensive technology services to help your business thrive in
                  the digital age.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-gray-300 text-black hover:bg-gray-800">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/cerberus-hero.png"
                  alt="Cerberus IT Professional - Your Technology Guardian"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                Our Services
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT solutions designed to secure, optimize, and transform your business operations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ServiceCard
              icon={<Server className="h-10 w-10 text-blue-600" />}
              title="Remote Data Backups"
              description="Secure backup solutions for your essential and private data, ensuring business continuity."
            />
            <ServiceCard
              icon={<Cpu className="h-10 w-10 text-blue-600" />}
              title="AI Automation"
              description="Streamline operations with intelligent automation solutions tailored to your business needs."
            />
            <ServiceCard
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="Remote Access"
              description="Secure remote access to all your computers, enabling flexible work arrangements."
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10 text-blue-600" />}
              title="Cybersecurity"
              description="Comprehensive protection against cyber threats to safeguard your business assets."
            />
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/information-technology.jpg"
                  alt="Information Technology Services and Solutions"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">
                  Why Choose Cerberus IT Consulting LLC?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We deliver tailored IT solutions that drive business growth and operational efficiency.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full p-1 bg-blue-100">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Expertise</h3>
                    <p className="text-gray-500">
                      Our team of certified IT professionals brings years of industry experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full p-1 bg-blue-100">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Tailored Solutions</h3>
                    <p className="text-gray-500">
                      Customized IT strategies designed specifically for your business needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full p-1 bg-blue-100">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Responsive Support</h3>
                    <p className="text-gray-500">
                      Dedicated customer service and technical support when you need it most.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">What Our Clients Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses that have transformed their IT infrastructure with our solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Cerberus IT Consulting revolutionized our data backup strategy. We now have peace of mind knowing our critical information is secure."
              author="Sarah Johnson"
              company="Meridian Marketing"
            />
            <TestimonialCard
              quote="The AI automation solutions implemented by Cerberus have significantly improved our operational efficiency and reduced costs."
              author="Michael Chen"
              company="Nexus Technologies"
            />
            <TestimonialCard
              quote="Their remote access setup allowed our team to transition seamlessly to hybrid work. The support team is always responsive and helpful."
              author="David Rodriguez"
              company="Pinnacle Consulting"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section className="py-16 md:py-24 bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a consultation today to see if our services would be a good fit for your company.
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
      </Section>

      <Footer />
    </div>
  )
}

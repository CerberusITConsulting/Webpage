import { Mail, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import AppointmentScheduler from "@/components/appointment-scheduler"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Us</h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss how we can help with your IT needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <Phone className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Phone</h3>
              <p className="text-gray-500 text-center">(919)-888-2316</p>
              <p className="text-gray-500 text-center">Mon-Fri: 9am - 5pm</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <Mail className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p className="text-gray-500 text-center">cerberusitconsulting.llc@gmail.com</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <MapPin className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Office</h3>
              <p className="text-gray-500 text-center">1235 East Blvd Ste E PMB 2330</p>
              <p className="text-gray-500 text-center">Charlotte, NC 28203</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Appointment Scheduler Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-slate-900">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-slate-900">
                Schedule a Consultation
              </h2>
              <p className="text-gray-500 mb-6">
                Book a time with one of our IT consultants to discuss your business needs and how we can help.
              </p>
              <AppointmentScheduler />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-900">How quickly can you respond to IT issues?</h3>
              <p className="text-gray-500">
                We offer various response time SLAs based on your service plan, with options for 24/7 emergency support
                for critical issues.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-900">Do you offer services for small businesses?</h3>
              <p className="text-gray-500">
                Yes, we specialize in providing scalable IT solutions for small to medium-sized businesses with flexible
                pricing options.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-900">How secure are your remote backup solutions?</h3>
              <p className="text-gray-500">
                Our backup solutions use industry-standard encryption and secure storage facilities with multiple
                redundancies to ensure your data is protected.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-900">Can you help with cloud migration?</h3>
              <p className="text-gray-500">
                Yes, we offer comprehensive cloud migration services, including assessment, planning, migration, and
                ongoing management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

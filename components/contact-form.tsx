"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your Company"
            required
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your IT needs..."
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {isSubmitted && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}
    </form>
  )
}

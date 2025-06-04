"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentScheduler() {
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState("")
  const [consultationType, setConsultationType] = useState("")
  const [details, setDetails] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send the appointment data to your server here
    console.log("Appointment scheduled:", {
      date,
      timeSlot,
      consultationType,
      details,
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
    setDate(undefined)
    setTimeSlot("")
    setConsultationType("")
    setDetails("")

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="date">Select a Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => {
                // Disable weekends and past dates
                const day = date.getDay()
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                return date < today || day === 0 || day === 6
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeSlot">Select a Time Slot</Label>
        <Select value={timeSlot} onValueChange={setTimeSlot} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a time slot" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="9:00 AM">9:00 AM</SelectItem>
            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
            <SelectItem value="1:00 PM">1:00 PM</SelectItem>
            <SelectItem value="2:00 PM">2:00 PM</SelectItem>
            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
            <SelectItem value="4:00 PM">4:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Consultation Type</Label>
        <RadioGroup value={consultationType} onValueChange={setConsultationType} required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="virtual" id="virtual" />
            <Label htmlFor="virtual">Virtual Meeting</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone">Phone Call</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="inperson" id="inperson" />
            <Label htmlFor="inperson">In-Person Meeting</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Additional Details</Label>
        <Textarea
          id="details"
          placeholder="Please provide any specific topics you'd like to discuss..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={3}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting || !date || !timeSlot || !consultationType}
      >
        {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
      </Button>

      {isSubmitted && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
          Your consultation has been scheduled! We'll confirm your appointment shortly.
        </div>
      )}
    </form>
  )
}

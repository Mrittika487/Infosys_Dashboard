"use client"

import { useState } from "react"
import useSWRMutation from "swr/mutation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

async function createTicket(url, { arg }) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  })
  if (!res.ok) throw new Error("Failed to submit ticket")
  return res.json()
}

export default function HelpContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "general",
    subject: "",
    message: "",
  })

  const { trigger, isMutating, error } = useSWRMutation("/api/support-tickets", createTicket)
  const [success, setSuccess] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setSuccess(false)
    try {
      await trigger(form)
      setSuccess(true)
      setForm({ name: "", email: "", category: "general", subject: "", message: "" })
    } catch (_) {
      setSuccess(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Contact Support</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <Label>Category</Label>
            <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="pickup">Pickup</SelectItem>
                <SelectItem value="opportunity">Opportunity</SelectItem>
                <SelectItem value="account">Account & Security</SelectItem>
                <SelectItem value="bug">Bug Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Short summary"
              required
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Describe the issue or request..."
              className="min-h-[120px]"
              required
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <div className="text-sm">
              {success && <span className="text-green-600">Thanks! Your request has been submitted.</span>}
              {error && <span className="text-red-600">Submission failed. Please try again.</span>}
            </div>
            <Button type="submit" disabled={isMutating} className="bg-primary text-primary-foreground">
              {isMutating ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

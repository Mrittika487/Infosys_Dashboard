import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const items = [
  {
    title: "Scheduling Pickups",
    desc: "How to request, reschedule, and manage pickups.",
    href: "/schedule-pickup",
  },
  {
    title: "Volunteer Opportunities",
    desc: "Browse, apply, and manage your applications.",
    href: "/opportunities",
  },
  {
    title: "Messages",
    desc: "Chat with NGOs and volunteers for coordination.",
    href: "/messages",
  },
  {
    title: "Account & Security",
    desc: "Update profile, change password, and manage settings.",
    href: "/my-profile",
  },
]

export default function HelpResources() {
  return (
    <Card className="border bg-card">
      <CardHeader>
        <CardTitle className="text-lg">Quick Resources</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block rounded-md border px-4 py-3 hover:bg-accent transition"
          >
            <div className="font-medium text-foreground">{item.title}</div>
            <div className="text-sm text-muted-foreground">{item.desc}</div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}

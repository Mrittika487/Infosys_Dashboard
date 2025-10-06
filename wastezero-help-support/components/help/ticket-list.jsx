"use client"

import useSWR from "swr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function TicketList() {
  const { data, isLoading } = useSWR("/api/support-tickets", fetcher, {
    refreshInterval: 10000,
  })

  const tickets = data?.tickets ?? []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Requests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {isLoading ? (
          <div className="text-muted-foreground text-sm">Loading...</div>
        ) : tickets.length === 0 ? (
          <div className="text-muted-foreground text-sm">
            No requests yet. Submit your first support request using the form above.
          </div>
        ) : (
          <ul className="space-y-3">
            {tickets.map((t) => (
              <li key={t.id} className="rounded-md border p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{t.subject}</div>
                  <Badge variant="secondary" className="capitalize">
                    {t.status}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {t.category} • {t.email} • {new Date(t.createdAt).toLocaleString()}
                </div>
                <p className="text-sm mt-2 text-foreground">{t.message}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

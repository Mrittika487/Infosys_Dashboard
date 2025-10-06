// NOTE: Swap this store to your DB later (Users/Messages/AdminLogs schema)
const STORE_KEY = Symbol.for("wastezero.supportTickets")

function getStore() {
  const g = globalThis
  if (!g[STORE_KEY]) g[STORE_KEY] = []
  return g[STORE_KEY]
}

export async function GET() {
  const tickets = getStore()
  return Response.json({ tickets })
}

export async function POST(req) {
  const body = await req.json().catch(() => null)
  if (!body) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 })
  }

  const { name, email, category, subject, message } = body
  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
  }

  const ticket = {
    id: Math.random().toString(36).slice(2),
    name,
    email,
    category: category || "general",
    subject,
    message,
    status: "open",
    createdAt: Date.now(),
  }

  const store = getStore()
  store.unshift(ticket)

  return new Response(JSON.stringify({ ticket }), { status: 201 })
}

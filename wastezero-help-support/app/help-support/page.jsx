import HelpResources from "@/components/help/help-resources"
import HelpFAQ from "@/components/help/help-faq"
import HelpContactForm from "@/components/help/help-contact-form"
import TicketList from "@/components/help/ticket-list"

export const metadata = {
  title: "Help & Support • WasteZero",
  description: "Find answers, contact support, and track your requests.",
}

export default function HelpSupportPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-balance text-foreground">Help & Support</h1>
        <p className="text-muted-foreground mt-2">
          Find quick answers, contact our team, and track your recent requests.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column: brand panel (image) + resources */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-lg border bg-card">
            <img
              src="/images/wastezero-login.png"
              alt="WasteZero branding and login mockup"
              className="w-full rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-medium">Join the Recycling Revolution</h2>
              <p className="text-muted-foreground mt-1">
                WasteZero connects volunteers, NGOs, and admins to schedule pickups and manage opportunities.
              </p>
            </div>
          </div>
          <HelpResources />
        </div>

        {/* Right columns: contact + faq + tickets */}
        <div className="lg:col-span-2 space-y-6">
          <HelpContactForm />
          <HelpFAQ />
          <TicketList />
        </div>
      </section>
    </main>
  )
}

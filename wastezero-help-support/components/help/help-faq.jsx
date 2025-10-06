import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    q: "How do I schedule a pickup?",
    a: "Go to Schedule Pickup, fill address, date, preferred time and waste types, then submit. You can review it in Pickup History.",
  },
  {
    q: "How do opportunities and applications work?",
    a: "NGOs create Opportunities with required skills and duration. Volunteers can apply; status updates appear on the opportunity or in your profile.",
  },
  {
    q: "How is my data used?",
    a: "We store profile details (name, location, skills) to match you with nearby opportunities and manage pickups. You can update these in My Profile.",
  },
  {
    q: "How do I reset my password?",
    a: "Open My Profile → Password tab. Follow the instructions to set a new password.",
  },
  {
    q: "How do I report a problem or share feedback?",
    a: "Use the Contact Support form on this page. We’ll reply to the email you provide.",
  },
]

export default function HelpFAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

import ContactHero from "@/components/FrontEnd/contact/ContactHero"
import ContactForm from "@/components/FrontEnd/contact/ContactForm"
import ContactInfo from "@/components/FrontEnd/contact/ContactInfo"
import Map from "@/components/FrontEnd/contact/Map"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <Map />
    </>
  )
}


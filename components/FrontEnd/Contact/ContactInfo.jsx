import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          Reach out to us through any of these channels or fill out the form for a personalized response.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 mr-4">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Our Location</h3>
            <p className="text-muted-foreground">
              123 Digital Avenue
              <br />
              Tech City, CA 90210
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 mr-4">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-muted-foreground">
              Main: +1 (555) 123-4567
              <br />
              Support: +1 (555) 987-6543
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-pink-500/10 text-pink-500 mr-4">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground">
              General: info@alberow.com
              <br />
              Support: support@alberow.com
              <br />
              Sales: sales@alberow.com
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-green-500/10 text-green-500 mr-4">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9 AM - 6 PM EST
              <br />
              Saturday: 10 AM - 3 PM EST
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


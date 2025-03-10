"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Map() {
  const mapRef = useRef(null)
  const [activeLocation, setActiveLocation] = useState(0)
  const [showLocations, setShowLocations] = useState(false)

  const locations = [
    {
      name: "Los Angeles Headquarters",
      address: "1234 Wilshire Blvd, Los Angeles, CA 90001",
      phone: "+1 (323) 555-1234",
      email: "la@alberow.com",
      hours: "Mon-Fri: 9AM-6PM",
      coordinates: { lat: 34.052235, lng: -118.243683 },
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.24583492357847!3d34.05172787260774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648d9808fbd%3A0xad7f4d47f05ff222!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1699978922119!5m2!1sen!2sca",
    },
    {
      name: "New York Office",
      address: "500 5th Avenue, New York, NY 10110",
      phone: "+1 (212) 555-5678",
      email: "nyc@alberow.com",
      hours: "Mon-Fri: 9AM-6PM",
      coordinates: { lat: 40.7128, lng: -74.006 },
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1699978922119!5m2!1sen!2sca",
    },
    {
      name: "San Francisco Office",
      address: "123 Market Street, San Francisco, CA 94105",
      phone: "+1 (415) 555-9012",
      email: "sf@alberow.com",
      hours: "Mon-Fri: 9AM-6PM",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948922!3d37.75781499602219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1699978922119!5m2!1sen!2sca",
    },
  ]

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.innerHTML = ""
      const iframe = document.createElement("iframe")
      iframe.src = locations[activeLocation].mapUrl
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.style.border = "0"
      iframe.allowFullscreen = true
      iframe.loading = "lazy"
      iframe.referrerPolicy = "no-referrer-when-downgrade"
      iframe.className = "rounded-lg"

      mapRef.current.appendChild(iframe)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
    }
  }, [activeLocation])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Our Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit us at one of our offices or get in touch online
          </p>
        </motion.div>

        <div className=" gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg border border-border/50"
              ref={mapRef}
            >
              {/* Map will be loaded here */}
            </motion.div>
          </div>

          <div>
            <div className="relative md:hidden mb-4">
              <Button
                variant="outline"
                className="w-full flex justify-between items-center"
                onClick={() => setShowLocations(!showLocations)}
              >
                {locations[activeLocation].name}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showLocations ? "rotate-180" : ""}`} />
              </Button>

              {showLocations && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-background border border-border rounded-md shadow-lg">
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors ${
                        index === activeLocation ? "bg-primary/10 text-primary" : ""
                      }`}
                      onClick={() => {
                        setActiveLocation(index)
                        setShowLocations(false)
                      }}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* <div className="hidden md:flex flex-col space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                      index === activeLocation
                        ? "border-primary/50 bg-primary/5"
                        : "border-border/50 hover:border-primary/30"
                    }`}
                    onClick={() => setActiveLocation(index)}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg">{location.name}</h3>
                      <p className="text-muted-foreground text-sm">{location.address}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div> */}
{/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-muted p-6 rounded-lg"
            >
              <h3 className="font-semibold text-xl mb-4">{locations[activeLocation].name}</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">{locations[activeLocation].address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{locations[activeLocation].phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{locations[activeLocation].email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">{locations[activeLocation].hours}</p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6">Get Directions</Button>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  )
}


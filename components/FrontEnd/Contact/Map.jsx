"use client"

import { useEffect, useRef } from "react"

export default function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    // In a real app, you'd use Google Maps API or similar
    // This is just a simple placeholder using an iframe
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.24583492357847!3d34.05172787260774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648d9808fbd%3A0xad7f4d47f05ff222!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1699978922119!5m2!1sen!2sca"
    iframe.width = "100%"
    iframe.height = "450"
    iframe.style.border = "0"
    iframe.allowFullscreen = true
    iframe.loading = "lazy"
    iframe.referrerPolicy = "no-referrer-when-downgrade"

    if (mapRef.current) {
      mapRef.current.innerHTML = ""
      mapRef.current.appendChild(iframe)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <div className="w-full h-[450px] mt-16" ref={mapRef}>
      {/* Map will be loaded here */}
    </div>
  )
}


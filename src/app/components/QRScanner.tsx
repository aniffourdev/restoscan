"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function QRScanner() {
  const router = useRouter()
  const scannerRef = useRef<HTMLDivElement>(null)
  const html5QrCodeRef = useRef<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    let Html5Qrcode: any
    try {
      Html5Qrcode = require("html5-qrcode").Html5Qrcode
    } catch (err) {
      setError("Failed to load QR scanner library.")
      return
    }
    if (!isMounted || !scannerRef.current) return
    const html5QrCode = new Html5Qrcode("qr-reader")
    html5QrCodeRef.current = html5QrCode
    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250,
      },
      (decodedText: string) => {
        html5QrCode.stop().then(() => {
          router.push("/menu")
        })
      },
      (error: any) => {
        // Optionally handle scan errors
      }
    ).catch((err: any) => {
      setError("No camera found or camera access denied.")
    })
    return () => {
      isMounted = false
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current.stop().catch(() => {})
      }
    }
  }, [router])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-gold text-2xl mb-4">Scan the QR Code</h1>
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-gold text-2xl mb-4">Scan the QR Code</h1>
      <div
        id="qr-reader"
        ref={scannerRef}
        className="rounded-lg border-4 border-gold bg-black"
        style={{ width: 300, height: 300 }}
      />
    </div>
  )
}

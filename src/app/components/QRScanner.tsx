'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// Dynamically import QR Reader to avoid SSR issues
const QrReader = dynamic(
  () => import('react-qr-reader').then(mod => mod.QrReader),
  { ssr: false }
)

export default function QRScanner() {
  const router = useRouter()
  const [cameraAllowed, setCameraAllowed] = useState(false)

  useEffect(() => {
    // Ask for camera permission when component mounts
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => setCameraAllowed(true))
      .catch((err) => {
        console.error('Camera permission denied', err)
        alert('Camera access is required to scan the QR code.')
      })
  }, [])

  const handleScan = (data: string | null) => {
    if (data) {
      // Optionally decode data here
      router.push('/menu')
    }
  }

  const handleError = (err: any) => {
    console.error('QR Scan error:', err)
  }

  return (
    <div className="text-center">
      <h1 className="text-gold text-2xl mb-4">Scan Your QR Code</h1>

      {cameraAllowed ? (
        <div className="border-4 border-gold rounded-lg overflow-hidden w-full max-w-md mx-auto">
          <div style={{ width: '100%' }}>
            <QrReader
              onResult={(result, error) => {
                if (result?.getText()) handleScan(result.getText());
                if (error) handleError(error);
              }}
              constraints={{ facingMode: 'environment' }}
              
            />
          </div>
        </div>
      ) : (
        <p className="text-red-400">Waiting for camera permission...</p>
      )}
    </div>
  )
}

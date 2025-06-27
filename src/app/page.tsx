"use client"
import Image from "next/image";
import QRScanner from "./components/QRScanner";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark text-cream">
      <QRScanner />
    </main>
  );
}

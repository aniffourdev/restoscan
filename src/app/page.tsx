import Image from "next/image";
import QRScanner from "./components/QRScanner";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-dark text-cream p-6">
      <QRScanner />
    </main>
  );
}

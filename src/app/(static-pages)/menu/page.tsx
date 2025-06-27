'use client'
import { useState } from 'react'
import MenuGrid from '@/app/components/MenuGrid'
import FoodModal from '@/app/components/FoodModal'

export default function MenuPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-dark text-cream p-6 flex flex-col items-center justify-center">
      <h1 className="text-gold text-2xl mb-6 text-center">Select Your Dish</h1>
      <MenuGrid onSelect={setSelected} />
      {selected && <FoodModal selectedId={selected} onClose={() => setSelected(null)} />}
    </main>
  )
}

'use client'
import { foodItems } from '@/lib/foodData'
import FoodCard from './FoodCard'

export default function MenuGrid({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {foodItems.map(item => (
        <FoodCard key={item.id} item={item} onClick={() => onSelect(item.id)} />
      ))}
    </div>
  )
}

'use client'
import { foodItems } from '@/lib/foodData'
import FoodCard from './FoodCard'

type MenuGridProps = {
  onSelect: (dish: string) => void
}

const dishes = [
  { name: "Beef" },
  { name: "Chicken" },
  { name: "Pasta" },
  { name: "Salmon" },
  { name: "Pizza" },
]

export default function MenuGrid({ onSelect }: MenuGridProps) {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
      {dishes.map((dish) => (
        <button
          key={dish.name}
          className="bg-cream text-dark rounded-xl p-6 shadow-lg hover:bg-gold hover:text-black transition text-xl font-semibold border-2 border-gold"
          onClick={() => onSelect(dish.name)}
        >
          {dish.name}
        </button>
      ))}
    </div>
  )
}

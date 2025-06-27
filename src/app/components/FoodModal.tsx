import { foodItems } from '@/lib/foodData'

export default function FoodModal({ selectedId, onClose }: { selectedId: string, onClose: () => void }) {
  const food = foodItems.find(f => f.id === selectedId)
  if (!food) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-dark text-cream p-6 rounded-xl shadow-xl w-96">
        <button onClick={onClose} className="text-gold float-right text-xl">×</button>
        <img src={food.image} alt={food.name} className="rounded-md mb-4 w-full h-40 object-cover" />
        <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
        <p className="text-sm">{food.description}</p>
      </div>
    </div>
  )
}

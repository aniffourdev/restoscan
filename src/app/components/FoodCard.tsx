type Food = {
    id: string
    name: string
    image: string
  }
  
  export default function FoodCard({ item, onClick }: { item: Food; onClick: () => void }) {
    return (
      <div
        onClick={onClick}
        className="bg-gold text-dark rounded-xl p-4 shadow-lg cursor-pointer transition hover:scale-105"
      >
        <img src={item.image} alt={item.name} className="rounded-md w-full h-32 object-cover mb-2" />
        <h3 className="text-lg font-semibold text-center">{item.name}</h3>
      </div>
    )
  }
  
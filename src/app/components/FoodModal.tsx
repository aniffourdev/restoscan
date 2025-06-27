import Beef3D from "./svgs/Beef3D"
import Chicken3D from "./svgs/Chicken3D"
import Pasta3D from "./svgs/Pasta3D"
import Salmon3D from "./svgs/Salmon3D"
import Pizza3D from "./svgs/Pizza3D"

type FoodModalProps = {
  selectedId: string
  onClose: () => void
}

const details: Record<string, string> = {
  Beef: "Premium grilled beef steak, seasoned with luxury spices.",
  Chicken: "Succulent roasted chicken with a golden crust.",
  Pasta: "Handmade pasta in a creamy truffle sauce.",
  Salmon: "Fresh Atlantic salmon, lightly seared and glazed.",
  Pizza: "Artisan pizza with gold leaf and gourmet toppings.",
}

function getSVG(name: string) {
  switch (name) {
    case "Beef":
      return <Beef3D />
    case "Chicken":
      return <Chicken3D />
    case "Pasta":
      return <Pasta3D />
    case "Salmon":
      return <Salmon3D />
    case "Pizza":
      return <Pizza3D />
    default:
      return null
  }
}

export default function FoodModal({ selectedId, onClose }: FoodModalProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gold text-2xl font-bold hover:text-cream"
      >
        ×
      </button>
      <div className="flex flex-col items-center">
        <div className="mb-4">{getSVG(selectedId)}</div>
        <h2 className="text-2xl text-gold font-bold mb-2">{selectedId}</h2>
        <p className="text-lg text-cream max-w-xs text-center">{details[selectedId]}</p>
      </div>
    </div>
  )
}

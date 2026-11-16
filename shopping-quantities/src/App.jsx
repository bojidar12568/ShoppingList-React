import { useState } from "react"
import ShoppingList from "./components/ShoppingList"


const listOfItems = [
  { name: "Milk", quantity: 1 },
  { name: "Bread", quantity: 2 },
  { name: "Eggs", quantity: 12 },
]

export default function App () {

  const [list , setList] = useState(listOfItems)


  return(
    <div>
      <ShoppingList list = {list} />
    </div>
  )
}
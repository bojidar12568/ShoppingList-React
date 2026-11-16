export default function ShoppingList ({list}) {

    return (
        <div>
            <ul>
                {list.map((items , index) => <li key={index}>{items.name} X {items.quantity}</li>)}
            </ul>
        </div>
    )
}
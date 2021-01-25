import React from 'react'
import Product from './Components/Products/Product'

const App = () => {
  const [item, setItem] = React.useState([])
  const items = [
    {
      id: 1,
      name: "Book 1",
      price: "12.99$",
      description: "This is a book about programming."
    },
    {
      id: 2,
      name: "Book 2",
      price: "12.99$",
      description: "This is a book about programming."
    },
    {
      id: 3,
      name: "Book 3",
      price: "12.99$",
      description: "This is a book about programming."
    },
    {
      id: 4,
      name: "Book 4",
      price: "12.99$",
      description: "This is a book about programming."
    }
  ]
  return (
    <div>
      {
        items.map(item =>
          <Product item={item} />
        )
      }

    </div>
  )
}

export default App

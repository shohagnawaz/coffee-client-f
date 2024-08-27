import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';

function App() {
  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);
  return (
    <>
      <h1>Hot hot cold coffee</h1>
    </>
  )
}

export default App

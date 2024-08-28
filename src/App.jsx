import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import CardCoffee from './components/CardCoffee';

function App() {
  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);
  return (
    <div className='m-10'>
      <h1 className='text-5xl text-center text-pink-700'>
        Hot hot cold coffee: {coffees.length}
      </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CardCoffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CardCoffee>)
        }
      </div>
    </div>
  )
}

export default App

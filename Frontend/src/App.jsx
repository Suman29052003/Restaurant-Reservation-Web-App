import { useState } from 'react'
import './App.css'
import ReservationForm from './assets/ReservationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReservationForm />
    </>
  )
}

export default App

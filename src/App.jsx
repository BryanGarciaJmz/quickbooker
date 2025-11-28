import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'
import ServicesGallery from './components/ServicesGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App__container">
      <header className="App__header">
        <h1>QuickBooker</h1>
        <p className="App__subtitle">Reserva visual y clara de servicios</p>
      </header>
      <div className="App__mainLayout">
        <div className="App__col App__col--calendar">
          <Calendar />
        </div>
        <div className="App__col App__col--services">
          <ServicesGallery />
        </div>
      </div>
    </div>
  )
}

export default App

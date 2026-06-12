import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import KSHeroSection from "./assets/ks-hero-section";
import GameCards from "./assets/game-cards";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-purple">
      <KSHeroSection />
      <GameCards />
    </div>
  )
}

export default App

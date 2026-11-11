import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import { jogadoresIniciais } from './data/jogadores.js'

export default function App() {
  const [jogadores, setJogadores] = useState([])

  useEffect(() => {
    setJogadores(jogadoresIniciais)
  }, [])

  return (
    <>
      <Header />
      <main className="galeria">
        {jogadores.map((jogador) => (
          <Card key={jogador.id} jogador={jogador} />
        ))}
      </main>
    </>
  )
}

export default function Card({ jogador }) {
  return (
    <article className="card">
      <img src={jogador.foto} alt={jogador.nome} />
      <h3>{jogador.nome}</h3>
    </article>
  )
}

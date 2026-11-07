import { timeline } from '../data/timeline.js'

export default function Timeline() {
  return (
    <section>
      <h2>이력</h2>
      <ul>
        {timeline.map((item) => (
          <li key={item.id}>
            <p>{item.period}</p>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
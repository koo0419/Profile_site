import './Timeline.css'
import { timeline } from '../data/timeline.js'
import TimelineItem from './TimelineItem.jsx'

export default function Timeline() {
  return (
    <section className="timeline">
      <h2 className="timeline__heading">이력</h2>
      <ul className="timeline__list">
        {timeline.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}
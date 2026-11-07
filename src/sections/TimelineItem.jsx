const TYPE_LABEL = {
  experience: '경력',
  education: '학력',
}

export default function TimelineItem({ item }) {
  return (
    <li className="timeline__item">
      <div className="timeline__meta">
        <span className="timeline__period">{item.period}</span>
        <span className={`timeline__badge timeline__badge--${item.type}`}>
          {TYPE_LABEL[item.type]}
        </span>
      </div>
      <h3 className="timeline__title">{item.title}</h3>
      <p className="timeline__place">{item.place}</p>
      <p className="timeline__desc">{item.description}</p>
    </li>
  )
}
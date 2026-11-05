import './Hero.css'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__affiliation">{profile.affiliation}</p>
      <p className="hero__tagline">{profile.tagline}</p>
    </section>
  )
}
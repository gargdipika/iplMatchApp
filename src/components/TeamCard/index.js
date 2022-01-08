// Write your code here
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {name, teamImageUrl} = teamDetail

  return (
    <li className="list-item-style">
      <img className="image-team-card" alt={name} src={teamImageUrl} />
      <h1 className="title-team-card">{name}</h1>
    </li>
  )
}

export default TeamCard

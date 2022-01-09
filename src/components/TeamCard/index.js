// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {id, name, teamImageUrl} = teamDetail

  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="list-item-style">
        <img className="image-team-card" alt={name} src={teamImageUrl} />
        <p className="title-team-card">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

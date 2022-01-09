// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetail} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetail
  let colorsStyleResult = ''

  if (matchStatus === 'Lost') {
    colorsStyleResult = 'red-style'
  } else {
    colorsStyleResult = 'green-style'
  }

  return (
    <li className="match-list-container">
      <img
        className="image-match-card"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="heading-match-card-one">{competingTeam}</p>
      <p className="discreption-style">{result}</p>
      <p className={colorsStyleResult}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

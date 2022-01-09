// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetail} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetail

  return (
    <div className="latest-match-detail-container">
      <div className="cont">
        <p className="heading-style-latest-match">{competingTeam}</p>
        <p className="para">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <img
        className="image-latest-match-competitor"
        alt={`latest match ${competingTeam}`}
        src={competingTeamLogo}
      />
      <div className="cont">
        <h1 className="heading-style-latest-match">First innings</h1>
        <p className="para">{firstInnings}</p>
        <h1 className="heading-style-latest-match">Second innings</h1>
        <p className="para">{secondInnings}</p>
        <h1 className="heading-style-latest-match">Man Of The Match</h1>
        <p className="para">{manOfTheMatch}</p>
        <h1 className="heading-style-latest-match">Umpire</h1>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

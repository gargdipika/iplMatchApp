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
      <div>
        <h1 className="heading-style-latest-match">{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="image-latest-match-competitor"
        alt="competing team logo"
        src={competingTeamLogo}
      />
      <div>
        <h1 className="heading-style-latest-match">First innings</h1>
        <p>{firstInnings}</p>
        <h1 className="heading-style-latest-match">Second innings</h1>
        <p>{secondInnings}</p>
        <h1 className="heading-style-latest-match">Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1 className="heading-style-latest-match">Umpire</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

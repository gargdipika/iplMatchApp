// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetail: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getDataFromUrl()
  }

  getDataFromUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    console.log(updatedData)
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      latestMatchDetail: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamBannerUrl,
      isLoading: false,
    })
  }

  getClassNameForBackground = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let background = ''
    switch (id) {
      case 'RCB':
        background = 'rcb'
        break
      case 'KKR':
        background = 'kkr'
        break
      case 'KXP':
        background = 'kxp'
        break
      case 'CSK':
        background = 'csk'
        break
      case 'RR':
        background = 'rr'
        break
      case 'MI':
        background = 'mi'
        break
      case 'DC':
        background = 'dc'
        break
      case 'SH':
        background = 'sh'
        break
      default:
        background = ''
        break
    }
    return background
  }

  render() {
    const backgroundStyle = this.getClassNameForBackground()
    const {
      latestMatchDetail,
      recentMatches,
      teamBannerUrl,
      isLoading,
    } = this.state

    return (
      <div className={`ipl-dashboard-container ${backgroundStyle}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`ipl-dashboard-container ${backgroundStyle}`}>
            <img
              className="banner-style"
              alt="team banner"
              src={teamBannerUrl}
            />
            <div className="heading-container-one">
              <h1 className="heading-match">Latest Matches</h1>
            </div>

            <LatestMatch latestMatchDetail={latestMatchDetail} />
            <ul className="all-match-list-container-one">
              {recentMatches.map(matchDetail => (
                <MatchCard key={matchDetail.id} matchDetail={matchDetail} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetail: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    console.log('running')
    this.getDataFromUrl()
  }

  getDataFromUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

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

  render() {
    const {
      latestMatchDetail,
      recentMatches,
      teamBannerUrl,
      isLoading,
    } = this.state
    console.log(latestMatchDetail)
    console.log(recentMatches)

    return (
      <div className="ipl-dashboard-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img alt="team banner" src={teamBannerUrl} />
            <p>Latest Matches</p>
            <LatestMatch latestMatchDetail={latestMatchDetail} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches

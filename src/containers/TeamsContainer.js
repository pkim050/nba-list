import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamsInput from '../components/teams/TeamsInput'
import TeamsList from '../components/teams/TeamsList'
import {fetchTeams} from '../actions/teams'

class TeamsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: []
        }
    }

    async getTeams() {
        try {
          const data = await fetch('https://nba-list-api.herokuapp.com/api/v1/teams')
          const jsonData = await data.json()
          this.setState({
              teams: jsonData
          })
        } catch (error) {
          console.log(error)
        }
    }
    
    componentDidMount() {
        this.getTeams()
        this.props.teams()
    }

    render() {
        return (
            <div>
                <TeamsInput fetchTeams={this.props.teams} />
                <TeamsList teams={this.state.teams} filteredTeams={this.props.filteredTeams} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teams: state.teams.teams,
        filteredTeams: state.teams.filteredTeams
    }
}

const mapDispatchToProps = dispatch => ({
    teams: () => dispatch(fetchTeams())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer)
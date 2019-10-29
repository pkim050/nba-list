import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchTeams} from '../../actions/teams'
import { tradePlayer } from '../../actions/players'

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: ""
        }
    }

    handleChange = event => {
        this.setState({
            teamName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let newTeam = this.props.teams.find(team => team.full_name === this.state.teamName)
        this.props.tradePlayer(this.props.playerId, newTeam.id)
    }

    componentDidMount() {
        this.props.getTeams()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Trade player to: 
                        <select value={this.state.teamName} onChange={this.handleChange}>
                            {this.props.teams.map(team => (
                                <option key={team.id} value={team.full_name}>
                                    {team.full_name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <input type="submit" value="Trade" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      teams: state.teams.teams
    }
}

const mapDispatchToProps = (dispatch) => ({
    getTeams: () => dispatch(fetchTeams()),
    tradePlayer: (id, teamId) => dispatch(tradePlayer(id, teamId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
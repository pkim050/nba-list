import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayersInput from '../components/players/PlayersInput'
import PlayersList from '../components/players/PlayersList'
import { fetchPlayers } from '../actions/players'

class PlayersContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    async getPlayers() {
        try {
            const data = await fetch('https://nba-list-api.herokuapp.com/api/v1/players')
            const jsonData = await data.json()
            this.setState({
                players: jsonData
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getPlayers()
        this.props.players()
    }

    render() {
        return (
            <div>
                <PlayersInput fetchPlayers={this.props.players} />
                <PlayersList players={this.state.players} filteredPlayers={this.props.filteredPlayers} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.players,
        filteredPlayers: state.players.filteredPlayers
    }
}

const mapDispatchToProps = dispatch => ({
    players: () => dispatch(fetchPlayers())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)
import React, { Component } from 'react'
import Player from './Player'

class PlayersList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            players: [],
            search: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            players: this.props.players
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            players: nextProps.players
        })
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        let currentList = []
        let newList = []
        if (this.state.search !== "") {
            currentList = this.props.players
            newList = currentList.filter(player => {
                const lc = player.toString().toLowerCase()
                const filter = this.state.search.toString().toLowerCase()
                return lc.includes(filter)
            })
        } else {
            newList = this.props.players
        }
        this.setState({
            players: newList
        })

    }

    renderPlayers = () => {
        let players = []
        if (!!this.props.filteredPlayers) {
            players = this.props.filteredPlayers 
        }
        else if (!!this.props.players.length > 0) {
            players = this.props.players
        }
        return (
            players.map(player => {
                return <Player key={player.id} player={player} />
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="players-list">
                    <div className="row">
                        {this.renderPlayers()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PlayersList
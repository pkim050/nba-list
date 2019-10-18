import React, { Component } from 'react'
import Team from './Team'

class TeamsList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            teams: [],
            search: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            teams: this.props.teams
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            teams: nextProps.teams
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
            currentList = this.props.teams
            newList = currentList.filter(team => {
                const lc = team.toString().toLowerCase()
                const filter = this.state.search.toString().toLowerCase()
                return lc.includes(filter)
            })
        } else {
            newList = this.props.teams
        }
        this.setState({
            teams: newList
        })

    }

    renderTeams = () => {
        let teams = []
        if (!!this.props.filteredTeams) {
            teams = this.props.filteredTeams 
        }
        else if (!!this.props.teams.length > 0) {
            teams = this.props.teams
        }
        return (
            teams.map(team => {
                return <Team key={team.id} team={team} />
            })
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="teams-list">
                    <div className="row">
                        {this.renderTeams()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TeamsList
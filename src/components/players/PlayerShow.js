import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {fetchTeams} from '../../actions/teams'
import { connect } from 'react-redux'
import Dropdown from './Dropdown'

export class PlayerShow extends Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }
    
    renderTeamLink = () => {
        return <Link to={{
            pathname: `/teams/${this.props.team.id}`,
            state: {team: this.props.team}
        }}>
            {this.props.team.full_name}
        </Link>
    }

    goBack() {
        this.props.history.goBack()
    }

    componentDidMount() {
        this.props.teams()
    }

    render() {
        const {
            id,
            name,
            age,
            height,
            weight,
            position,
            image,
        } = this.props
        return (
            <React.Fragment>
                <br /><br /><br />
                <div className="container">
                    <div className="row">
                    <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={this.goBack}>Back</button>
                        <img src={image} alt="" className="img-card-top" style={{ height: "14rem" }} />
                        <div className="card-body">
                            <h1>{name}</h1>
                            <h2>Age: {age}</h2>
                            <h2>Height: {height}</h2>
                            <h2>Weight: {weight}</h2>
                            <h3>Position: {position}</h3>
                            <h4>Team: {this.renderTeamLink()}</h4>
                            <h5><Dropdown fetchTeams={this.props.teams} playerId={id} /></h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    teams: () => dispatch(fetchTeams())
})

export default connect(null, mapDispatchToProps)(withRouter(PlayerShow))
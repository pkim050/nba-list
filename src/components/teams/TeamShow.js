import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

export class TeamShow extends Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack() {
        this.props.history.goBack()
    }

    renderRoster = (players) => {
        players.sort(function(a, b) {
            return a.id - b.id;
        })
        return players.map(player => {
            return <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <img src={player.image} alt="" />
                </div>
                <div className="card-body">
                    <h1>{player.name}</h1>
                    <p>Jersey Number: {player.number}</p>
                    <p>Position: {player.position}</p>
                </div>
                <div className="card-footer">
                    <Link to={{
                        pathname: `/players/${player.id}`,
                        state: {player: player}
                    }}>
                        Details
                    </Link>
                </div>
            </div>
            }
        )
    }

    render() {
        const {
            name,
            city,
            coach,
            image,
        } = this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={this.goBack}>Back</button>
                            <img src={image} alt="" className="d-block w-100" />
                            <div className="card-body">
                                <h1 className="text-uppercase">{name}</h1>
                                <h2 className="text-capitalize text-slanted">{city}</h2>
                                <h3>Coach: {coach}</h3>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-3 mb-4">Roster</h2>
                    <div className="players-list">
                        <div className="row">
                            {this.renderRoster(this.props.players)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(TeamShow)
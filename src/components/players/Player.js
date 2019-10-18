import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Player extends Component {
    renderDetails = () => {
        return <Link to={{
            pathname: `/players/${this.props.player.id}`,
            state: {player: this.props.player}
        }}>
            Details
        </Link>
    }
    render() {
        const {
            name,
            position,
            image,
        } = this.props.player

        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-2 my-3">
                    <div className="card">
                        <img src={image} alt="" className="img-card-top" style={{ height: "14rem" }} />
                        <div className="card-body">
                            <h5>{name}</h5>
                            <p>Position: {position}</p>
                        </div>
                        <div className="card-footer">
                            {this.renderDetails()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
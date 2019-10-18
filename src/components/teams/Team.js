import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Team extends Component {
    renderDetails = () => {
        return <Link to={{
            pathname: `/teams/${this.props.team.id}`,
            state: {team: this.props.team}
        }}>
            Details
        </Link>
    }
    render() {
        const {
            full_name,
            image,
        } = this.props.team

        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-2 my-3">
                    <div className="card">
                        <img src={image} alt="" className="img-card-top" style={{ height: "14rem" }} />
                        <div className="card-body">
                            <h5>{full_name}</h5>
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
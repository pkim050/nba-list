import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayersInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            players: [],
            search: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.filter(this.state.search)
    }

    render() {
        return (
            <div>
                <div className="col10 mx-auto col-md-5 text-center text-uppercase mb-3">
                    <h1 className="text-slanted">Player List</h1>
                </div>
                <form className="mt-4" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input type="text" className="form-control text-center" name="search" placeholder="Search by player's name!" onChange={this.handleChange} />
                        <div className="input-group-append">
                            <button type="submit" className="input-group-text bg-primary text-white">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filter: searchText => dispatch({type: 'FILTER_PLAYERS', search: searchText})
    }
}

export default connect(null, mapDispatchToProps)(PlayersInput)
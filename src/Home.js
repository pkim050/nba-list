import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to NBA List of Teams & Players App!</h1>
                <p>This app enables the user to search for players and teams.</p>
                <p>The app has information of current NBA rosters and NBA players' attributes such as age, weight, height, etc.</p>
                <p>You can click either tabs of NBA Teams or NBA Players in order to find & search for NBA teams and NBA players respectively.</p>
                <p>The data consists only of players that are in current NBA teams (Free agent players are not included).</p>
            </div>
        )
    }
}

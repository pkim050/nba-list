export const fetchPlayers = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/players")
        .then(resp => resp.json())
        .then(players => dispatch({type: 'PLAYERS_REQUEST', players}))
    }
}

export const addPlayers = (players) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/players", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(players)
        })
        .then(resp => resp.json())
        .then(players => dispatch({type: 'ADD_PLAYERS', players}))
    }
}
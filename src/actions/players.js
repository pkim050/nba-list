export const fetchPlayers = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/players")
        .then(resp => resp.json())
        .then(players => dispatch({type: 'PLAYERS_REQUEST', players}))
    }
}
export const fetchTeams = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/teams")
        .then(resp => resp.json())
        .then(teams => dispatch({type: 'TEAMS_REQUEST', teams}))
    }
}
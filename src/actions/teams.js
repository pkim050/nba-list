export const fetchTeams = () => {
    return dispatch => {
        debugger
        return fetch("https://nba-list-api.herokuapp.com/api/v1/teams")
        .then(resp => resp.json())
        .then(teams => dispatch({type: 'TEAMS_REQUEST', teams}))
    }
}
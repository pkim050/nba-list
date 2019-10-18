export default function manageTeams (state = {teams: [], filteredTeams: null}, action) {
    switch (action.type) {
        case "TEAMS_REQUEST":
            return {...state, teams: action.teams}
        case "FILTER_TEAMS":
            let search = action.search.toLowerCase()
            let filtered = null
            if (search === "") {
                filtered = null
            } else {
                filtered = state.teams.filter(team => {
                    const teamName = team.full_name.toLowerCase()
                    return teamName.includes(search)
                })
            }
            const obj = {...state, filteredTeams: filtered}
            return obj

        default:
            return state
    }
}
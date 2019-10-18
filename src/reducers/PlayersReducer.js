export default function managePlayers (state = {players: [], filteredPlayers: null}, action) {
    switch (action.type) {
        case "PLAYERS_REQUEST":
            return {...state, players: action.players}
        case "FILTER_PLAYERS":
            let search = action.search.toLowerCase()
            let filtered = null
            if (search === "") {
                filtered = null
            } else {
                filtered = state.players.filter(player => {
                    const playerName = player.name.toLowerCase()
                    return playerName.includes(search)
                })
            }
            const obj = {...state, filteredPlayers: filtered}
            return obj
        default:
            return state
    }
}
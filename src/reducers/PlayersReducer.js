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
        case "ADD_LIKES":
            let updatedPlayers = [...state.players.filter(player => {
                return player.id !== action.player.id
            })
        , action.player]
            return {...state, players: updatedPlayers}
        case "TRADE_PLAYER":
            let arrPlayers = [...state.players.filter(player => {
                return player.id !== action.player.id
            })
        , action.player]
            return {...state, players: arrPlayers}
        default:
            return state
    }
}
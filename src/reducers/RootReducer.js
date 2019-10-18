import { combineReducers } from 'redux'
import PlayersReducer from './PlayersReducer'
import TeamsReducer from './TeamsReducer'

const rootReducer = combineReducers({
    players: PlayersReducer,
    teams: TeamsReducer
})

export default rootReducer
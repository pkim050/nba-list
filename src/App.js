import React, { Component } from 'react';
import './App.css';
import PlayersContainer from './containers/PlayersContainer'
import TeamsContainer from './containers/TeamsContainer'
import TeamShow from './components/teams/TeamShow'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PlayerShow from './components/players/PlayerShow'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
      players: []
    }
  }

  async getTeamsAndPlayers() {
    try {
      Promise.all([fetch('http://localhost:3000/api/v1/teams'), fetch('http://localhost:3000/api/v1/players')])
      .then(([resp1, resp2]) => {
        return Promise.all([resp1.json(), resp2.json()])
      })
      .then(([data1, data2]) => {
        this.setState({
          teams: data1,
          players: data2
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTeamsAndPlayers()
  }

  render() {
    return (
      <Router history={history}>
        {this.state.teams.length > 0 ?
        <React.Fragment>
          <Link to="/"><button>Home</button></Link>
          <Link to="/teams"><button>NBA Teams</button></Link>
          <Link to="/players"><button>NBA Players</button></Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/teams" component={TeamsContainer} />
            <Route exact path="/teams/:id" render={({match}) => (<TeamShow {...this.state.teams.find(team => team.id === parseInt(match.params.id))} />)} />
            <Route exact path="/players" component={PlayersContainer} />
            <Route exact path="/players/:id" render={({match}) => (<PlayerShow {...this.state.players.find(player => player.id === parseInt(match.params.id))} />)} />
          </Switch>
        </React.Fragment> : <h1>Loading...</h1>
        }
      </Router>
    );
  }
}

export default App;

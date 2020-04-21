import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
//import SearchBar from '../containers/SearchBar'
import ItemList from '../components/ItemList'
import AddItem from '../containers/AddItem'

import * as Ons from 'react-onsenui'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>

            <ons-page>
              <ons-toolbar>
                <div className="center">Freezer</div>
              </ons-toolbar>
              <ons-list>
                <ItemList />
              </ons-list>
            </ons-page>

          <Switch>
            <Route exact path="/">
            <Link to="/add">
            <ons-fab position="bottom right">
              <ons-icon icon="md-plus">
              </ons-icon>
            </ons-fab>
            </Link>

            </Route>

            <Route path="/add">
              <AddItem />
            </Route>
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App

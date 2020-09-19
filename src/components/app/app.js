import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';


import './app.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-component';

export default class App extends React.Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header />
              <RandomPlanet />
              <Switch>
                <Route  path="/" 
                        render={() => <h2>Welcome to StarDB</h2>}
                        exact />
                <Route path="/peoples/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" component={StarshipPage} exact/>
                <Route path="/starships/:id" 
                        render={ ({ match }) => {
                          const { id } = match.params;

                        return <StarshipDetails itemId = { id } /> 
                      }} />
                <Route render={ () => <h1>Page not found</h1> } />
            </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';


import './app.css';

export default class App extends React.Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
// import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
import Row from '../row';

export default class App extends React.Component {

  swapiService = new SwapiService();
  

  render () {

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11}
      getData = {getPerson}
      getImageUrl = {getPersonImage} />
    );
    
    const starshipDetails = (
      <ItemDetails itemId={5}
      getData = {getStarship}
      getImageUrl = {getStarshipImage} />
    );

    return (
    <div>
      <Header />
      <RandomPlanet />

      <Row 
        left={personDetails}
        right={starshipDetails}/>

    </div>
    );
  };
};
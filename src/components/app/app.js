import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';
import Row from '../row';

export default class App extends React.Component {

  swapiService = new SwapiService();
  

  render () {

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11}
      getData = {getPerson}
      getImageUrl = {getPersonImage} >

        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>

      </ItemDetails>
    );
    
    const starshipDetails = (
      <ItemDetails itemId={5}
        getData = {getStarship}
        getImageUrl = {getStarshipImage}>

          
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>

      </ItemDetails>

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
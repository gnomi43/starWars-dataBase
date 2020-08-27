import React from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

class ErrorBoundry extends React.Component {

    state={
        hasError: false
    };

    componentDidCatch(){
        this.setState({
            hasError: true
        });
    };

    render() {
            if(this.state.hasError){
                return <ErrorIndicator />
            }
            return this.props.children;
    };

};

export default class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state={
        selectedItem: 3,
        hasError: false
    };



    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id
        });
      };

    render(){
        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList   onItemSelected = {this.onPersonSelected}
            getData= {this.swapiService.getAllPeople}>

            {(i) => (
                `${i.name} (${i.birthYear})`
            )}

            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedItem}/>
            </ErrorBoundry>
        );
        
        return( 
            <Row left={ itemList } right={ itemDetails }/>
        );
    };
};
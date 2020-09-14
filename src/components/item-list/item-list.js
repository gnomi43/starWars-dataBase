import React from 'react';
import { withData } from '../hoc-helper';

import './item-list.css';
import SwapiService from '../../services/swapi-service';

 const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabe } = props;

    const items = data.map((item) => {
        const { id } = item;
  
        const label = renderLabe(item);
          return (
            <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id) }>
              { label }
            </li>
          );
      });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);


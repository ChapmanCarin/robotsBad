import React from 'react';
import ListItem from './ListItem.jsx';


const List = ({ robots }) => (
  <div>
    {robots.map(robot => <ListItem robot={robot} />)}
  </div>
)

export default List;
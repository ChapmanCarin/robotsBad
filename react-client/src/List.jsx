import React from 'react';
import ListItem from './ListItem.jsx';


const List = () => (
  <div>
    {/* TO-DO: make this dynamic, to accept all robots */}
    <table>
    <tbody>
      <ListItem />
      <ListItem />
      <ListItem />
    </tbody>
  </table>
  </div>
)

export default List;
import React from 'react';


const ListItem = ({ robot }) => (
  <div>
    <p>name of robot:<b>{robot[0]}</b></p>
    <p>how it will kill you:<b>{robot[1]}</b></p>
  </div>
);

export default ListItem;

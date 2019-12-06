import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      model: '',
      description: '',
    }
  }

  handleClickGet(){
    // TO-DO: make a GET request that will get all robots from the backend
    
  }

  handleClickMake(){
    //TO-DO: make a POST request that will send the user's supplied robot to the backend
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Robots. Your future. You're welcome (to postapocalyptic hell).
        </p>
      </header>
      <p>below, enter the name of one of the robots that will kill us all</p>
      <input type="text" onChange={e => this.setState({ model: e.target.value })} />
      <p>below, tell me how will it kill us</p>
      <input type="text" onChange={e => this.setState({ description: e.target.value })} />
      <br></br>
      {/* TO-DO: add a button that when clicked will add a user's robot to the database using the function <handleClickMake> */}
      <br></br>
      {/* TO-DO: add a button that when clicked will fetch all robots from the database and display them on the page using the function <handleClickGet>*/}
      <div>
        {/* TO-DO: pass <robots> to the <List> component */}
      </div>
    </div>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


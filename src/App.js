import logo from './logo.svg';
import './App.css';
import React from 'react';
import Clock from './Clock';
import { Button, Container } from 'semantic-ui-react';


class App extends React.Component {
  state = { showClock: false };

  toggleShowClock = () => {
    this.setState( state => {
      return { showClock: !state.showClock };
    })
  }

  render() {
    return (
      <Container style={{ margintop: "25px", }}>
        { this.state.showclock && <Clock /> }
        <Button onclic={this.toggleShowClock} color="purple">Toggle Clock</Button>
      </Container>
    );
  }
}

export default App;

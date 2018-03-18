import React, { Component } from 'react';
import ButtonA from './ButtonA'
import ButtonB from './ButtonB'
import MassageA from './MassageA'

class App extends Component {
  render() {
    return (
      <div >
        <ButtonA/>
        <ButtonB/>
        <MassageA/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { inc, reset, incWithDelay, accumulate, accPush } from './actions';

class CounterButton extends Component {
  render() {
    return (
      <div >
        <button onClick = {this.props.inc}>Inc</button>
        <button onClick = {this.props.reset}>Reset</button>
        <button onClick = {this.props.incWithDelay}>incWithDelay</button>
        <button onClick = {this.props.accumulate}>accumulate</button>
        <button onClick = {this.props.push}>push</button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        inc : () => dispatch(inc()),
        reset : () => dispatch(reset()),
        incWithDelay : () => dispatch(incWithDelay()),
        accumulate : () => dispatch(accumulate()),
        push : () => dispatch(accPush())
    }
}

export default connect(null,mapDispatchToProps)(CounterButton);

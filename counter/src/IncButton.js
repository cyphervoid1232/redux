import React, { Component } from 'react';
import {connect} from 'react-redux';
import { inc, reset } from './actions';

class IncButton extends Component {
  render() {
    return (
      <div >
        <button onClick = {this.props.inc}>Inc</button>
        
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        inc : () => dispatch(inc())
        
    }
}

export default connect(null,mapDispatchToProps)(IncButton);

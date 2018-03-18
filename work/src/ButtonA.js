import React, { Component } from 'react';
import { buttonA } from './action';
import { connect } from 'react-redux';

class ButtonA extends Component {
  render() {
    return (
      <div >
        <button onClick={this.props.buttonA}>A</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    buttonA : () => dispatch(buttonA())
})
const mapStateToProps = (state) => ({
    valA : state
})



export default connect(null, mapDispatchToProps)(ButtonA);

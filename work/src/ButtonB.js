import React, { Component } from 'react';
import { buttonB } from './action';
import { connect } from 'react-redux';

class ButtonB extends Component {
  render() {
    return (
      <div >
        <button onClick={this.props.buttonB}>B</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    buttonB : () => dispatch(buttonB())
})
const mapStateToProps = (state) => ({
    valA : state
})



export default connect(null, mapDispatchToProps)(ButtonB);

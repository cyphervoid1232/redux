import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {green : false}
    }
    componentWillReceiveProps(nextProps){ // เมื่อมีการ recieve ค่า props
        if(nextProps.val > this.props.val){
            this.setState({green : true})
            
        }
    }

    componentDidUpdate(){ // เมื่อมีการ update ค่า เสร้จสิ้นแล้ว
        if(this.state.green) {
            if(this._preveTimeout){
                clearTimeout(this._preveTimeout)
            }
            this._preveTimeout = setTimeout(() => {
                this.setState({green: false})
            }, 2000);
        }
    }

  render() {
    return (
      <div style={{color: this.state.green ? 'green' : 'black'}}>
        {this.props.val}
      </div>
    );
  }
}
let mapStateToPrpos = (state)  =>{
    return {val : state.val}
}

export default connect(mapStateToPrpos)(Counter);

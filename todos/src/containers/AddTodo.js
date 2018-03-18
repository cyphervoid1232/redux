import React, {Component} from 'react'
import TodoList from '../components/TodoList'
import {connect} from 'react-redux'
import { addTodo, setVisibilityFilter } from '../actions/index';

class AddTodo extends Component {
    submitTodo = (e) => {
        e.preventDefault()
        if(!this.input.value.trim()) return
        this.props.addTodo(this.input.value)
        this.input.value = ''
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.submitTodo}>
                    <input ref = {node => this.input = node}/>
                    <button type="submit">Add</button>
                </form>
                {/* <button onClick={this.props.click}>all</button> */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>( {
    addTodo : (text) => dispatch(addTodo(text)) 
    // click : () => dispatch(setVisibilityFilter('SHOW_ALL'))
})

export default connect(null,mapDispatchToProps)(AddTodo);
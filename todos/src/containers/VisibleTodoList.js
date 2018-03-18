import React, {Component} from 'react'
import TodoList from '../components/TodoList'
import {connect} from 'react-redux'
import { toggleTodo, VisibilityFilters, deleteTodo } from '../actions';
import visibilityFilter from '../reducers/visibilityFilter'
import {createSelector} from 'reselect'

// class VisibleTodoList extends Component {

//     render() {
//         return(
//             <TodoList {...this.props}/>
//         )
//     }
// }

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_COMPLETED : return todos.filter(t => t.completed)
            break;
        case VisibilityFilters.SHOW_ACTIVE : return todos.filter(t => !t.completed)
            break;
        default : return todos
    }
}
const todoSelector = (state) => state.todo
const visibilityFilterSelector = (state) => state.visibilityFilter
const getVisibleTodosSelector = createSelector([todoSelector, visibilityFilterSelector],
    (todos, visibilityFilter) => getVisibleTodos(todos, visibilityFilter)
)
const mapStateToProps = (state) => ({
    todos: getVisibleTodosSelector(state)
    
})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo : (id) => dispatch(deleteTodo(id))
})

// export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
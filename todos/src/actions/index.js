import {createActions} from 'redux-actions'

let nextTodoId = 3
// export const addTodo = text => ({
//     type : 'ADD_TODO',
//     id: nextTodoId++,
//     text,
//     completed : false
// })

// export const toggleTodo = id => ({
//     type : "TOGGLE_TODO",
//     id
// })

// export const deleteTodo = id => ({
//     type : "DELETE_TODO",
//     id
// })

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}
// export const setVisibilityFilter = (filter) => ({
//     type : 'SET_VISIBILITY_FILTER',
//     filter : filter || VisibilityFilters.SHOW_ALL
// })

export const {setVisibilityFilter,deleteTodo,addTodo,toggleTodo} = createActions({
    SET_VISIBILITY_FILTER: (filter = VisibilityFilters.SHOW_ALL) => ({filter}),
    DELETE_TODO : (id) => ({id}),
    ADD_TODO : (text) => ({id:nextTodoId++, text, completed : false}),
    TOGGLE_TODO : (id) => ({id})
})


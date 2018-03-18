import { handleActions } from "redux-actions";
import { addTodo, deleteTodo, toggleTodo } from "../actions/index";

const initial = [
    {id: 1, text: 'foo', completed : false},
    {id: 2, text: 'bar', completed : false}
];

// const todos = (state = initial, action) => {
//     switch(action.type){
//         case 'ADD_TODO' : return [...state, {id : action.id , text: action.text, completed : false}] 
//             break;
//         case 'TOGGLE_TODO':             // return object ใหม่ เสมอ
            // return state.map(t => 
            //     (t.id === action.id)
            //     ? {...t, completed: !t.completed}
            //     : t
            // ) 
//         case 'DELETE_TODO' :
            // return state.filter((t) => {
            //     return t.id != action.id
            // })

//         default : return state
    
//     }
   
// }

// const todos = handleActions()
const todos = handleActions({
    [addTodo](state, action){
        return [...state, {id : action.payload.id , text: action.payload.text, completed : false}] 
    },
    [deleteTodo](state,action){  
        return state.filter((t) => {
            return t.id != action.payload.id
        })

    },
    [toggleTodo](state, action){
        return state.map(t => 
            (t.id === action.payload.id)
            ? {...t, completed: !t.completed}
            : t
        ) 
    }
}, initial)


export default todos;
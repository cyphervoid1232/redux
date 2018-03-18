
import {handleActions} from 'redux-actions'
import { setVisibilityFilter, VisibilityFilters } from '../actions/index';

// const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
//     if(action.type == 'SET_VISIBILITY_FILTER') {
//         return action.filter // เป็น state เสมอ
//     }
//     return state
// }

const visibilityFilter = handleActions({
    [setVisibilityFilter](state, action){
        console.log(action)
        return action.payload.filter
    }
}, VisibilityFilters.SHOW_ALL)

export default visibilityFilter;
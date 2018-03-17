let initialState = {val : 0}
let reducer = (state = initialState, action = {}) => {
    if(action.type == 'INCREMENT'){
        return {val : state.val + action.by}
    }
    if(action.type == 'RESET'){
        return {val : 0}
    }
    return state
}

export default reducer
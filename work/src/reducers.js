const initial = {
    msgA: false,
    msgB: false
}


export const reducers = (state = initial, action) => {
    if(action.type == 'BUTTON_A'){
        let a = state
        a.msgA = true
        return  a
    }else if(action.type == 'BUTTON_B'){
        let b = state
        b.msgB = true
        return  b
    }
    return state
}
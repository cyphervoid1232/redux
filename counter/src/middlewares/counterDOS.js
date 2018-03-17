let last_timestamp = 0
let middleware = state => next => action => {
    if(action.type == 'INCREMENT'){
        let current = new Date().getTime()
        if(current - last_timestamp < 1000){
            return
        }
        last_timestamp = current;
    }
    next(action)
}

export default middleware
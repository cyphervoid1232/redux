export const inc = (by = 1) =>{
    return {type: 'INCREMENT', by}
}

export const reset = () =>{
    return {type: 'RESET'}
}

export const incWithDelay = (by) =>{
    let a = inc(by)
    a.__delay = 1000
    return a;
}

export const accumulate = () => {
    return {type : 'ACCUMULATE'}
}

export const accPush = () => {
    return {type: 'ACC_PUSH'}
}

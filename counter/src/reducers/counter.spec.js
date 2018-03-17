
import reducer from './counter'
import {inc, reset} from '../actions'

describe('counter reducer', () => {
    it('should handle initial state', () => {
        expect(reducer(undefined, {})).toEqual({val : 0})
    })

    it('should increment', () => {
        expect(reducer({val : 2},inc())).toEqual({val : 3})
    })

    it('should reset', () => {
        expect(reducer({val : 1},reset())).toEqual({val : 0})
    })
})
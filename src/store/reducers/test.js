import types from '../actionTypes'

export default function test(state = [], action) {
    switch (action.type) {
        case types.TEST_ACTION:
            return [...state, 1]
        default:
            return state
    }
}

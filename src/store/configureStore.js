import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

if (!localStorage.getItem('reduxState')) {
    localStorage.setItem('reduxState', JSON.stringify({}))
}
const defaultState = JSON.parse(localStorage.getItem('reduxState'))

export default function configureStore(initialState = defaultState) {
    const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f))

    store.subscribe(() => {
        localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    })

    return store
}

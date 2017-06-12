import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line import/no-extraneous-dependencies
import 'bootstrap/scss/bootstrap.scss'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('app')
    )
}

render(Root)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        render(Root)
    })
}

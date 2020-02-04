import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { mainRouter } from './routers'
import './index.less'
import App from './App'
import store from './stores'

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/admin' component={App} />
                {
                    mainRouter.map((router) => {
                        return <Route key={router.pathname} path={router.pathname} component={router.component} />
                    })
                }
                <Redirect to='/admin' from='/' exact />
                <Redirect to='/404' />
            </Switch>
        </Router>
    </Provider>,
    document.querySelector("#root")
)
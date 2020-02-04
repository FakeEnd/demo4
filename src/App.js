import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRouter } from './routers'
import { Frame , SearchIn } from './components'
import { connect } from 'react-redux'

const menus = adminRouter.filter(router => router.isNav === true)

const mapState = state => ({
    isLogin: state.user.isLogin
})

@connect(mapState)

class App extends Component {
    render() {
        return (
            this.props.isLogin
                ?
                <div>
                    <Frame menus={menus}>
                        <SearchIn />
                        <Switch>
                            {
                                adminRouter.map(router => {
                                    return (<Route
                                        key={router.pathname}
                                        path={router.pathname}
                                        exact={router.exact}
                                        render={(routerProps) => {
                                            return <router.component {...routerProps} />
                                        }}
                                    />
                                    )
                                })
                            }
                            <Redirect to={adminRouter[0].pathname} from='/admin' exact />
                            <Redirect to='/404' />
                        </Switch>
                    </Frame>
                </div>
                :
                <Redirect to='/login' />
        )
    }
}
export default App



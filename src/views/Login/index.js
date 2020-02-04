import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { Redirect } from 'react-router-dom'

//这个渣渣登录界面以后也要改一改
const mapState = state => ({
    isLogin: state.user.isLogin,
    isLoading: state.user.isLoading
})
@connect(mapState, { login })

class Login extends Component {
    trylogin = () => {
        this.props.login(this.refs.username.value, this.refs.password.value)
    }
    render() {
        return (
            this.props.isLogin
                ?
                <Redirect to='/admin' />
                :
                <div className="login" style={{
                    //border:'solid yellow 1px',                    
                    //backgroundColor: 'white'
                    textAlign: 'center',
                }}>
                    <div
                        style={{
                            marginTop: '150px',
                            textAlign: 'center'
                        }}>
                        <img
                            src={require("../../assests/images/logo.png")}
                            alt=''
                            style={{
                                width: '150px',
                                height: '150px'
                            }} />
                    </div>

                    <div
                        style={{
                            marginTop: '55px'
                        }}
                    >
                        <div
                            style={{

                                height: '40px',
                                width: '350px',
                            }}>
                            <input
                                style={{
                                    height: '40px',
                                    width: '250px',
                                    border: 'none',
                                    background: '#F2F2F2',
                                    fontSize: '16px'
                                }}
                                id="userIds"
                                ref='username'
                                placeholder='学号' />
                        </div>

                        <br></br>
                        <div style={{

                            height: '40px',
                            width: '350px',
                        }}>
                            <input
                                style={{
                                    height: '40px',
                                    width: '250px',
                                    border: 'none',
                                    background: '#F2F2F2',
                                    fontSize: '16px'
                                }}
                                id="passwords"
                                ref='password'
                                type='password'
                                placeholder='登录密码' />
                        </div>
                        <br></br>
                        <div
                            style={{
                                height: '40px',
                                width: '350px',
                            }}>
                            <input
                                style={{
                                    height: '40px',
                                    width: '250px',
                                    border: '.5px green solid',
                                    background: 'white',
                                    fontSize: '16px',
                                    color: 'green'
                                }}
                                type="button"
                                value="登陆"
                                onClick={this.trylogin}
                                className="loginbutton"
                            />
                        </div>
                    </div>
                </div>
        )
    }
}
export default Login

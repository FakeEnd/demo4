import actionType from './index'

//要引入请求方法loginservice
import axios from 'axios'
const loginRequest = (username, password) => axios.post(
    `http://106.15.192.117:8080/canteen/login?userId=${username}&password=${password}`
)



const startLogin = () => {
    return {
        type: actionType.LOGIN
    }
}

const loginSucess = (username) => {
    return {
        type: actionType.LOGINSUCESS,
        payload: username
    }
}

const loginFail = () => {
    alert('密码失败')
    return {
        type: actionType.LOGINFAIL
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(startLogin())
        loginRequest(username, password)
            .then((response) => {
                //console.log(response)
                if (response.data.message === "Success！！") {
                    dispatch(loginSucess(username))
                    window.sessionStorage.setItem('auToken',username)
                    
                } else (dispatch(loginFail()))

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
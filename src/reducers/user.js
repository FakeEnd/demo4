import actionType from '../actions/index'

const isLogin=Boolean(window.sessionStorage.getItem('auToken'))

const initialState = {
    username: '',
    isLogin,
    isLoading: false
}


export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case (actionType.LOGIN):
            return {
                ...state,
                isLoading: true
            }
        case (actionType.LOGINSUCESS):
            return {
                ...state,
                isLogin: true,
                isLoading:false
            }
        case (actionType.LOGINFAIL):
            return {
                username: '',
                isLogin: false,
                isLoading: false
            }
        default:
            return state
    }
}
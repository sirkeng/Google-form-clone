import { AUTHENTICATION } from '../actions/types'

export const stateLogin = (isRequest = false, isAuth = false, alertmsg = '', username = null) => {
    return {
        isRequest, 
        isAuth, 
        alertmsg,
        username
    }
}

const loginReducer = (state = stateLogin(), action) => {
    // console.log('loginReducer--->', { state, action })
    switch (action.type) {
        case AUTHENTICATION:
            return action.payload
        default:
            return state
    }
}

export default loginReducer
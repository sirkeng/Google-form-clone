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
    switch (action.type) {
        case AUTHENTICATION:
            console.log('AUTHENTICATION')
            return action.payload
        default:
            console.log('default')
            return state
    }
}

export default loginReducer
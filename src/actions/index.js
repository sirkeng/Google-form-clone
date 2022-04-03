import { AUTHENTICATION } from './types'
import { stateLogin } from '../reducers/login'

export const logoutAction = () => {
    return resultsAction(AUTHENTICATION, stateLogin(false, false, 'Loout success', '' )) 
}

export const loginAction = (values) => {
    if(values.username==='1' && values.password==='1') return resultsAction(AUTHENTICATION, stateLogin(true, true, 'Login success', 'SirKenG' ))
    return resultsAction(AUTHENTICATION,  stateLogin(true, false, 'Username or Password is incorrect!', '' ))
}

export const resultsAction = (type, payload) => {
    return {
        type,
        payload
    }
}
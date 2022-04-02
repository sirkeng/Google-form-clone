import { AUTHENTICATION } from './types'
import { stateLogin } from '../reducers/login'

export const loginAction = (values) => {
    if(values.username==='1' && values.password==='1') return resultsAction(AUTHENTICATION, stateLogin(true, true, 'Login success', 'SirKenG' ))
    return resultsAction(AUTHENTICATION,  stateLogin(true, false, 'Username or Password is incorrect!', 'SirKenG' ))
}

export const resultsAction = (type, payload) => {
    return {
        type,
        payload
    }
}
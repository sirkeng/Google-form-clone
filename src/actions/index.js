import axios from 'axios'

import { AUTHENTICATION, CATS } from './types'
import { stateLogin } from '../reducers/login'
import { stateCats } from '../reducers/cats'


export const catsRequestAction = (limit, page) => {
    return (dispatch) => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=Asc`)
        .then(response => {
            // console.log('results--->', response.data)
            return dispatch(resultsAction(CATS, stateCats(limit, page, response.data)))
        })
        // .catch(error => error.response)
    }
}

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
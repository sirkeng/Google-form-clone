import { CATS } from '../actions/types'

export const stateCats = (limit = 50, page = 1, datas = []) => {
    return {
        limit,
        page,
        datas
    }
}

const loginReducer = (state = stateCats(), action) => {
    // console.log('loginReducer--->', { state, action })
    switch (action.type) {
        case CATS:
            return action.payload
        default:
            return state
    }
}

export default loginReducer
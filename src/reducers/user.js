import { types } from '../actions/user';

const initialState = {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'bwtAjwvRw6lnQdfOKkMHmcJ7JAxF0QwOP6wqaln1',
    loading: false,
    logIn: false,
    phone: '',
    password: '',
    access_token: '',
    refresh_token: '',
};

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case types.AUTH.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.AUTH.SUCCESS:
            const { 
                phone,
                password,
                access_token, 
                refresh_token,
            } = action;
            return {
                ...state,
                loading: false,
                logIn: true,
                phone,
                password,
                access_token,
                refresh_token,
            };
        case types.AUTH.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.AUTH.LOGOUT:
            return {
                ...state,
                logIn: false,
            };
        default:
            return state;
    }
}

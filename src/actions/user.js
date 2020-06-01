export const types = {
    AUTH: {
        REQUEST: 'AUTH.REQUEST',
        SUCCESS: 'AUTH.SUCCESS',
        FAILURE: 'AUTH.FAILURE',
        LOGOUT: 'AUTH.LOGOUT',
    },
};

const authRequest = data => ({
    type: types.AUTH.REQUEST,
    ...data,
});

const authSuccess = data => ({
    type: types.AUTH.SUCCESS,
    ...data,
});

const authFailure = data => ({
    type: types.AUTH.FAILURE,
    ...data,
});

const authLogout = data => ({
    type: types.AUTH.LOGOUT,
    ...data,
});

export {
    authRequest,
    authSuccess,
    authFailure,
    authLogout,
};

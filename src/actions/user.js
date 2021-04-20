export const types = {
    REGISTER_INFO: {
        REQUEST: 'REGISTER_INFO.REQUEST',
        SUCCESS: 'REGISTER_INFO.SUCCESS',
        FAILURE: 'REGISTER_INFO.FAILURE',
    },
    GET_CODE: {
        REQUEST: 'GET_CODE.REQUEST',
        SUCCESS: 'GET_CODE.SUCCESS',
        FAILURE: 'GET_CODE.FAILURE',
    },
    AUTH: {
        REQUEST: 'AUTH.REQUEST',
        SUCCESS: 'AUTH.SUCCESS',
        FAILURE: 'AUTH.FAILURE',
        LOGOUT: 'AUTH.LOGOUT',
    },
    REGISTER: {
        REQUEST: 'REGISTER.REQUEST',
        SUCCESS: 'REGISTER.SUCCESS',
        FAILURE: 'REGISTER.FAILURE',
    },
 
    CHECK_CODE: {
        REQUEST: 'CHECK_CODE.REQUEST',
        SUCCESS: 'CHECK_CODE.SUCCESS',
        FAILURE: 'CHECK_CODE.FAILURE',
    },
    INFO: {
        REQUEST: 'INFO.REQUEST',
        SUCCESS: 'INFO.SUCCESS',
        FAILURE: 'INFO.FAILURE',
    },
    INFO_FULL: {
        REQUEST: 'INFO_FULL.REQUEST',
        SUCCESS: 'INFO_FULL.SUCCESS',
        FAILURE: 'INFO_FULL.FAILURE',
    },
    INFO_FULL_UPDATE: {
        REQUEST: 'INFO_FULL_UPDATE.REQUEST',
        SUCCESS: 'INFO_FULL_UPDATE.SUCCESS',
        FAILURE: 'INFO_FULL_UPDATE.FAILURE',
    },
    SEND_EMAIL: {
        REQUEST: 'SEND_EMAIL.REQUEST',
        SUCCESS: 'SEND_EMAIL.SUCCESS',
        FAILURE: 'SEND_EMAIL.FAILURE',
    },
    UPLOAD_PHOTO: {
        REQUEST: 'UPLOAD_PHOTO.REQUEST',
        SUCCESS: 'UPLOAD_PHOTO.SUCCESS',
        FAILURE: 'UPLOAD_PHOTO.FAILURE',
    },
    DIALOGS: {
        REQUEST: 'DIALOGS.REQUEST',
        SUCCESS: 'DIALOGS.SUCCESS',
        FAILURE: 'DIALOGS.FAILURE',
    },
    DIALOG: {
        REQUEST: 'DIALOG.REQUEST',
        SUCCESS: 'DIALOG.SUCCESS',
        FAILURE: 'DIALOG.FAILURE',
    },
    MESSAGE_SEND: {
        REQUEST: 'MESSAGE_SEND.REQUEST',
        SUCCESS: 'MESSAGE_SEND.SUCCESS',
        FAILURE: 'MESSAGE_SEND.FAILURE',
    },
    SAVE_TOKEN: {
        REQUEST: 'SAVE_TOKEN.REQUEST',
        SUCCESS: 'SAVE_TOKEN.SUCCESS',
        FAILURE: 'SAVE_TOKEN.FAILURE',
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

const registerRequest = data => ({
    type: types.REGISTER.REQUEST,
    ...data,
});

const registerSuccess = data => ({
    type: types.REGISTER.SUCCESS,
    ...data,
});

const registerFailure = data => ({
    type: types.REGISTER.FAILURE,
    ...data,
});

const authLogout = data => ({
    type: types.AUTH.LOGOUT,
    ...data,
});

const userInfoRequest = data => ({
    type: types.INFO.REQUEST,
    ...data,
});

const userInfoSuccess = data => ({
    type: types.INFO.SUCCESS,
    ...data,
});

const userInfoFailure = data => ({
    type: types.INFO.FAILURE,
    ...data,
});

const userInfoFullRequest = data => ({
    type: types.INFO_FULL.REQUEST,
    ...data,
});

const userInfoFullSuccess = data => ({
    type: types.INFO_FULL.SUCCESS,
    ...data,
});

const userInfoFullFailure = data => ({
    type: types.INFO_FULL_UPDATE.FAILURE,
    ...data,
});

const userInfoFullUpdateRequest = data => ({
    type: types.INFO_FULL_UPDATE.REQUEST,
    ...data,
});

const userInfoFullUpdateSuccess = data => ({
    type: types.INFO_FULL_UPDATE.SUCCESS,
    ...data,
});

const userInfoFullUpdateFailure = data => ({
    type: types.INFO_FULL_UPDATE.FAILURE,
    ...data,
});

const sendEmailRequest = data => ({
    type: types.SEND_EMAIL.REQUEST,
    ...data,
});

const sendEmailSuccess = data => ({
    type: types.SEND_EMAIL.SUCCESS,
    ...data,
});

const sendEmailFailure = data => ({
    type: types.SEND_EMAIL.FAILURE,
    ...data,
});

const uploadPhotoRequest = data => ({
    type: types.UPLOAD_PHOTO.REQUEST,
    ...data,
});

const uploadPhotoSuccess = data => ({
    type: types.UPLOAD_PHOTO.SUCCESS,
    ...data,
});

const uploadPhotoFailure = data => ({
    type: types.UPLOAD_PHOTO.FAILURE,
    ...data,
});

const dialogsRequest = data => ({
    type: types.DIALOGS.REQUEST,
    ...data,
});

const dialogsSuccess = data => ({
    type: types.DIALOGS.SUCCESS,
    ...data,
});

const dialogsFailure = data => ({
    type: types.DIALOGS.FAILURE,
    ...data,
});

const dialogRequest = data => ({
    type: types.DIALOG.REQUEST,
    ...data,
});

const dialogSuccess = data => ({
    type: types.DIALOG.SUCCESS,
    ...data,
});

const dialogFailure = data => ({
    type: types.DIALOG.FAILURE,
    ...data,
});

const messageSendRequest = data => ({
    type: types.MESSAGE_SEND.REQUEST,
    ...data,
});

const messageSendSuccess = data => ({
    type: types.MESSAGE_SEND.SUCCESS,
    ...data,
});

const messageSendFailure = data => ({
    type: types.DIALOG.FAILURE,
    ...data,
});

const saveTokenRequest = data => ({
    type: types.SAVE_TOKEN.REQUEST,
    ...data,
});

const saveTokenSuccess = data => ({
    type: types.SAVE_TOKEN.SUCCESS,
    ...data,
});

const saveTokenFailure = data => ({
    type: types.SAVE_TOKEN.FAILURE,
    ...data,
});

const getRegisterInfoRequest = data => ({
    type: types.REGISTER_INFO.REQUEST,
    ...data,
});

const getRegisterInfoSuccess = data => ({
    type: types.REGISTER_INFO.SUCCESS,
    ...data,
});

const getRegisterInfoFailure = data => ({
    type: types.REGISTER_INFO.FAILURE,
    ...data,
});

const checkCodeRequest = data => ({
    type: types.CHECK_CODE.REQUEST,
    ...data,
});

const checkCodeSuccess = data => ({
    type: types.CHECK_CODE.SUCCESS,
    ...data,
});

const checkCodeFailure = data => ({
    type: types.CHECK_CODE.FAILURE,
    ...data,
});

const getCodeRequest = data => ({
    type: types.GET_CODE.REQUEST,
    ...data,
});

const getCodeSuccess = data => ({
    type: types.GET_CODE.SUCCESS,
    ...data,
});

const getCodeFailure = data => ({
    type: types.GET_CODE.FAILURE,
    ...data,
});

export {
    authRequest,
    authSuccess,
    authFailure,
    authLogout,
    registerRequest,
    registerSuccess,
    registerFailure,
    userInfoRequest,
    userInfoSuccess,
    userInfoFailure,
    userInfoFullRequest,
    userInfoFullSuccess,
    userInfoFullFailure,
    userInfoFullUpdateRequest,
    userInfoFullUpdateSuccess,
    userInfoFullUpdateFailure,
    sendEmailRequest,
    sendEmailSuccess,
    sendEmailFailure,
    uploadPhotoRequest,
    uploadPhotoSuccess,
    uploadPhotoFailure,
    dialogsRequest,
    dialogsSuccess,
    dialogsFailure,
    dialogRequest,
    dialogSuccess,
    dialogFailure,
    messageSendRequest,
    messageSendSuccess,
    messageSendFailure,
    saveTokenRequest,
    saveTokenSuccess,
    saveTokenFailure,
    getRegisterInfoRequest,
    getRegisterInfoSuccess,
    getRegisterInfoFailure,
    checkCodeRequest,
    checkCodeSuccess,
    checkCodeFailure,
    getCodeRequest,
    getCodeSuccess,
    getCodeFailure,
};

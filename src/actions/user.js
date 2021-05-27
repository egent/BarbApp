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
    PASSWORD_RESET: {
        REQUEST: 'PASSWORD_RESET.REQUEST',
        SUCCESS: 'PASSWORD_RESET.SUCCESS',
        FAILURE: 'PASSWORD_RESET.FAILURE',
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
    DIALOG_DELETE: {
        REQUEST: 'DIALOG_DELETE.REQUEST',
        SUCCESS: 'DIALOG_DELETE.SUCCESS',
        FAILURE: 'DIALOG_DELETE.FAILURE',
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
    ON_BOARDING: {
        OFF: 'ON_BOARDING.OFF',
    },
    SPECS: {
        REQUEST: 'SPECS.REQUEST',
        SUCCESS: 'SPECS.SUCCESS',
        FAILURE: 'SPECS.FAILURE',
    },
    SPECS_SET: {
        REQUEST: 'SPECS_SET.REQUEST',
        SUCCESS: 'SPECS_SET.SUCCESS',
        FAILURE: 'SPECS_SET.FAILURE',
    },
    PROFILE_DESCRIPTIONS: {
        REQUEST: 'PROFILE_DESCRIPTIONS.REQUEST',
        SUCCESS: 'PROFILE_DESCRIPTIONS.SUCCESS',
        FAILURE: 'PROFILE_DESCRIPTIONS.FAILURE',
    },
    PROFILE_DESCRIPTION_UPDATE: {
        REQUEST: 'PROFILE_DESCRIPTION_UPDATE.REQUEST',
        SUCCESS: 'PROFILE_DESCRIPTION_UPDATE.SUCCESS',
        FAILURE: 'PROFILE_DESCRIPTION_UPDATE.FAILURE',
    },
    GET_WORKPLACES: {
        REQUEST: 'GET_WORKPLACES.REQUEST',
        SUCCESS: 'GET_WORKPLACES.SUCCESS',
        FAILURE: 'GET_WORKPLACES.FAILURE',
    },
    FORM: {
        SET: 'FORM.SET',
    },
    BEAUTY_ROOMS: {
        REQUEST: 'BEAUTY_ROOMS.REQUEST',
        SUCCESS: 'BEAUTY_ROOMS.SUCCESS',
        FAILURE: 'BEAUTY_ROOMS.FAILURE',
    },
    CITY_INFO: {
        REQUEST: 'CITY_INFO.REQUEST',
        SUCCESS: 'CITY_INFO.SUCCESS',
        FAILURE: 'CITY_INFO.FAILURE',
    },
    WORKPLACE_ADD: {
        REQUEST: 'WORKPLACE_ADD.REQUEST',
        SUCCESS: 'WORKPLACE_ADD.SUCCESS',
        FAILURE: 'WORKPLACE_ADD.FAILURE',
    },
    BREAKS: {
        DELETE: 'BREAKS.DELETE',
    },
    WORKPLACE_DELETE: {
        REQUEST: 'WORKPLACE_DELETE.REQUEST',
        SUCCESS: 'WORKPLACE_DELETE.SUCCESS',
        FAILURE: 'WORKPLACE_DELETE.FAILURE',
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

const dialogDeleteRequest = data => ({
    type: types.DIALOG_DELETE.REQUEST,
    ...data,
});

const dialogDeleteSuccess = data => ({
    type: types.DIALOG_DELETE.SUCCESS,
    ...data,
});

const dialogDeleteFailure = data => ({
    type: types.DIALOG_DELETE.FAILURE,
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

const passwordResetRequest = data => ({
    type: types.PASSWORD_RESET.REQUEST,
    ...data,
});

const passwordResetSuccess = data => ({
    type: types.PASSWORD_RESET.SUCCESS,
    ...data,
});

const passwordResetFailure = data => ({
    type: types.PASSWORD_RESET.FAILURE,
    ...data,
});

const onBoardingOff = data => ({
    type: types.ON_BOARDING.OFF,
    ...data,
});

const specsRequest = data => ({
    type: types.SPECS.REQUEST,
    ...data,
});

const specsSuccess = data => ({
    type: types.SPECS.SUCCESS,
    ...data,
});

const specsFailure = data => ({
    type: types.SPECS.FAILURE,
    ...data,
});

const specsSetRequest = data => ({
    type: types.SPECS_SET.REQUEST,
    ...data,
});

const specsSetSuccess = data => ({
    type: types.SPECS_SET.SUCCESS,
    ...data,
});

const specsSetFailure = data => ({
    type: types.SPECS_SET.FAILURE,
    ...data,
});

const profileDescriptionsRequest = data => ({
    type: types.PROFILE_DESCRIPTIONS.REQUEST,
    ...data,
});

const profileDescriptionsSuccess = data => ({
    type: types.PROFILE_DESCRIPTIONS.SUCCESS,
    ...data,
});

const profileDescriptionsFailure = data => ({
    type: types.PROFILE_DESCRIPTIONS.FAILURE,
    ...data,
});

const profileDescriptionUpdateRequest = data => ({
    type: types.PROFILE_DESCRIPTION_UPDATE.REQUEST,
    ...data,
});

const profileDescriptionUpdateSuccess = data => ({
    type: types.PROFILE_DESCRIPTION_UPDATE.SUCCESS,
    ...data,
});

const profileDescriptionUpdateFailure = data => ({
    type: types.PROFILE_DESCRIPTION_UPDATE.FAILURE,
    ...data,
});

const getWorkplacesRequest = data => ({
    type: types.GET_WORKPLACES.REQUEST,
    ...data,
});

const getWorkplacesSuccess = data => ({
    type: types.GET_WORKPLACES.SUCCESS,
    ...data,
});

const getWorkplacesFailure = data => ({
    type: types.GET_WORKPLACES.FAILURE,
    ...data,
});

const setForm = data => ({
    type: types.FORM.SET,
    ...data,
});

const beautyRoomsRequest = data => ({
    type: types.BEAUTY_ROOMS.REQUEST,
    ...data,
});

const beautyRoomsSuccess = data => ({
    type: types.BEAUTY_ROOMS.SUCCESS,
    ...data,
});

const beautyRoomsFailure = data => ({
    type: types.BEAUTY_ROOMS.FAILURE,
    ...data,
});

const cityInfoRequest = data => ({
    type: types.CITY_INFO.REQUEST,
    ...data,
});

const cityInfoSuccess = data => ({
    type: types.CITY_INFO.SUCCESS,
    ...data,
});

const cityInfoFailure = data => ({
    type: types.CITY_INFO.FAILURE,
    ...data,
});

const workplaceAddRequest = data => ({
    type: types.WORKPLACE_ADD.REQUEST,
    ...data,
});

const workplaceAddSuccess = data => ({
    type: types.WORKPLACE_ADD.SUCCESS,
    ...data,
});

const workplaceAddFailure = data => ({
    type: types.WORKPLACE_ADD.FAILURE,
    ...data,
});

const breaksDelete = data => ({
    type: types.BREAKS.DELETE,
    ...data,
});

const workplaceDeleteRequest = data => ({
    type: types.WORKPLACE_DELETE.REQUEST,
    ...data,
});

const workplaceDeleteSuccess = data => ({
    type: types.WORKPLACE_DELETE.SUCCESS,
    ...data,
});

const workplaceDeleteFailure = data => ({
    type: types.WORKPLACE_DELETE.FAILURE,
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
    passwordResetRequest,
    passwordResetSuccess,
    passwordResetFailure,
    onBoardingOff,
    dialogDeleteRequest,
    dialogDeleteSuccess,
    dialogDeleteFailure,
    specsRequest,
    specsSuccess,
    specsFailure,
    specsSetRequest,
    specsSetSuccess,
    specsSetFailure,
    profileDescriptionsRequest,
    profileDescriptionsSuccess,
    profileDescriptionsFailure,
    profileDescriptionUpdateRequest,
    profileDescriptionUpdateSuccess,
    profileDescriptionUpdateFailure,
    getWorkplacesRequest,
    getWorkplacesSuccess,
    getWorkplacesFailure,
    setForm,
    beautyRoomsRequest,
    beautyRoomsSuccess,
    beautyRoomsFailure,
    cityInfoRequest,
    cityInfoSuccess,
    cityInfoFailure,
    workplaceAddRequest,
    workplaceAddSuccess,
    workplaceAddFailure,
    breaksDelete,
    workplaceDeleteRequest,
    workplaceDeleteSuccess,
    workplaceDeleteFailure,
};

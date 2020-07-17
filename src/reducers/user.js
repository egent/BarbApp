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
    messages_new: 0,
    messages_total: 0,
    info: null,
    info_full: null,
    dialogs: [],
    dialog: [],
    dialog_messages: [],
    user_types: [],
    cities: [],
    sms_code_for_test: '',
    check_code_from_sms: false,
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
                access_token: '',
                refresh_token: '',
            };
        case types.INFO.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.INFO.SUCCESS:
            const { messages, user } = action;
            return {
                ...state,
                messages_new: messages.new,
                messages_total: messages.total,
                info: user,
                loading: false,
            };
        case types.INFO.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.INFO_FULL.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.INFO_FULL.SUCCESS:
            return {
                ...state,
                info_full: action.user,
                loading: false,
            };
        case types.INFO_FULL.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.INFO_FULL_UPDATE.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.INFO_FULL_UPDATE.SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case types.INFO_FULL_UPDATE.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.SEND_EMAIL.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.SEND_EMAIL.SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case types.SEND_EMAIL.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.UPLOAD_PHOTO.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.UPLOAD_PHOTO.SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case types.UPLOAD_PHOTO.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.DIALOGS.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.DIALOGS.SUCCESS:
            return {
                ...state,
                dialogs: action.dialogs,
                loading: false,
            };
        case types.DIALOGS.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.DIALOG.REQUEST:
            return {
                ...state,
                dialog: [],
                dialog_messages: [],
                loading: true,
            };
        case types.DIALOG.SUCCESS:
            const { dialog, dialog_messages } = action;
            return {
                ...state,
                dialog,
                dialog_messages,
                loading: false,
            };
        case types.DIALOG.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.MESSAGE_SEND.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.MESSAGE_SEND.SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case types.MESSAGE_SEND.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.REGISTER_INFO.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER_INFO.SUCCESS:
            return {
                ...state,
                user_types: action.types,
                cities: action.cities,
                loading: false,
            };
        case types.REGISTER_INFO.FAILURE:
            return {
                ...state,
                loading: false,
            };
        case types.REGISTER.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER.SUCCESS:
            const { data, sms_code_for_test } = action;
            return {
                ...state,
                loading: false,
                info: data,
                sms_code_for_test,
                check_code_from_sms: true,
            };
        case types.REGISTER.FAILURE:
            return {
                ...state,
                loading: false,
            };

        case types.CHECK_CODE.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.CHECK_CODE.SUCCESS:
            return {
                ...state,
                phone: action.phone,
                password: action.password,
                check_code_from_sms: false,
                loading: false,
            };
        case types.CHECK_CODE.FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

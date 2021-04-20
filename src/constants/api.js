const ONESIGNAL_APP_ID = '69e49fe0-635c-42f2-acda-2ff356bed6e5';
const PREFIX = '/app'
const BACKEND_URL = 'https://barb.ua' + PREFIX;

const ENDPOINT_REGISTER_INFO = BACKEND_URL + '/register';
const ENDPOINT_GET_CODE =  BACKEND_URL + '/send-code'

// todo delete in production
const ENDPOINT_AUTH = BACKEND_URL + '/oauth/token'; 
const ENDPOINT_REGISTER = BACKEND_URL + '/api-register';
const ENDPOINT_USER_INFO = BACKEND_URL + '/api-index'; 
const ENDPOINT_USER_INFO_FULL = BACKEND_URL + '/api-settings'; 
const ENDPOINT_SEND_EMAIL = BACKEND_URL + '/api-send-email-code';
const ENDPOINT_UPLOAD_PHOTO = BACKEND_URL + '/api-settings/update-photo';
const ENDPOINT_DIALOGS = BACKEND_URL + '/api-dialogs';
const ENDPOINT_DIALOG = BACKEND_URL + '/api-dialog/';
const ENDPOINT_SAVE_PUSH_TOKEN = '/api-save-push-token';
const ENDPOINT_CHECK_CODE = BACKEND_URL + '/api-register-code';

export {
    ONESIGNAL_APP_ID,
    BACKEND_URL,
    ENDPOINT_REGISTER_INFO,
    ENDPOINT_GET_CODE
};

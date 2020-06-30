const ONESIGNAL_APP_ID = '69e49fe0-635c-42f2-acda-2ff356bed6e5';
const BACKEND_URL = 'https://barb.ua';

const ENDPOINT_AUTH = BACKEND_URL + '/oauth/token'; 
const ENDPOINT_USER_INFO = BACKEND_URL + '/api-index'; 
const ENDPOINT_USER_INFO_FULL = BACKEND_URL + '/api-settings'; 
const ENDPOINT_SEND_EMAIL = BACKEND_URL + '/api-send-email-code';
const ENDPOINT_UPLOAD_PHOTO = BACKEND_URL + '/api-settings/update-photo';
const ENDPOINT_DIALOGS = BACKEND_URL + '/api-dialogs';
const ENDPOINT_DIALOG = BACKEND_URL + '/api-dialog/';
const ENDPOINT_SAVE_PUSH_TOKEN = '/api-save-push-token';

export {
    BACKEND_URL,
    ENDPOINT_AUTH,
    ENDPOINT_USER_INFO,
    ENDPOINT_USER_INFO_FULL,
    ENDPOINT_SEND_EMAIL,
    ENDPOINT_UPLOAD_PHOTO,
    ENDPOINT_DIALOGS,
    ENDPOINT_DIALOG,
    ONESIGNAL_APP_ID,
    ENDPOINT_SAVE_PUSH_TOKEN,
};

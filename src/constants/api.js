const ONESIGNAL_APP_ID = '69e49fe0-635c-42f2-acda-2ff356bed6e5';
const PREFIX = '/app';
const BACKEND_URL = 'https://barb.ua';
const BACKEND_URL_PREFIX = BACKEND_URL + PREFIX;
const ENDPOINT_AUTH = BACKEND_URL + '/oauth/token';
const ENDPOINT_REGISTER = BACKEND_URL_PREFIX + '/register';
const ENDPOINT_GET_CODE = BACKEND_URL_PREFIX + '/send-code';
const ENDPOINT_CHECK_CODE = BACKEND_URL_PREFIX + '/check-code';
const ENDPOINT_PASSWORD_RESET = BACKEND_URL_PREFIX + '/reset-password';
const ENDPOINT_USER_INFO = BACKEND_URL_PREFIX + '/profile';
const ENDPOINT_USER_INFO_FULL = BACKEND_URL_PREFIX + '/profile';
const ENDPOINT_DELETE_DIALOGS = BACKEND_URL + '/api-dialog/delete';
const ENDPOINT_SPECS = BACKEND_URL_PREFIX + '/profile/specs';
const ENDPOINT_PROFILE_DESCRIPTIONS =
  BACKEND_URL_PREFIX + '/profile/descriptions';
const ENDPOINT_GET_WORKPLACES = BACKEND_URL_PREFIX + '/workplaces';
const ENDPOINT_GET_BEAUTY_ROOMS =
  BACKEND_URL_PREFIX + '/workplaces/new/get-salons';
const ENDPOINT_POINT_SEARCH_NAME =
  BACKEND_URL_PREFIX + '/workplaces/get-salons-addresses';
const ENDPOINT_GET_CITY_INFO =
  BACKEND_URL_PREFIX + '/workplaces/new/get-city-info';
const ENDPOINT_WORKPLACE_ADD =
  BACKEND_URL_PREFIX + '/workplaces/new/store-address';
const ENDPOINT_WORKPLACE_UPDATE =
  BACKEND_URL_PREFIX + '/workplaces/new/save-address';
const ENDPOINT_WORKPLACE_STORE =
  BACKEND_URL_PREFIX + '/workplaces/new/store-address';
const ENDPOINT_WORKPLACE_DELETE =
  BACKEND_URL_PREFIX + '/workplaces/delete-address';
const ENDPOINT_PRICE = BACKEND_URL_PREFIX + '/price';
const ENDPOINT_PRICE_SAVE = BACKEND_URL_PREFIX + '/price-update';

const ENDPOINT_SEND_EMAIL = BACKEND_URL + '/api-send-email-code';
const ENDPOINT_UPLOAD_PHOTO = BACKEND_URL + '/api-settings/update-photo';
const ENDPOINT_DIALOGS = BACKEND_URL + '/api-dialogs';
const ENDPOINT_DIALOG = BACKEND_URL + '/api-dialog/';
const ENDPOINT_SAVE_PUSH_TOKEN = '/api-save-push-token';
const ENDPOINT_SERVICES = BACKEND_URL_PREFIX + '/procedures';
const ENDPOINT_SERVICES_CATEGORY = BACKEND_URL_PREFIX + '/procedures/cats';

export {
  ONESIGNAL_APP_ID,
  BACKEND_URL,
  ENDPOINT_REGISTER,
  ENDPOINT_GET_CODE,
  ENDPOINT_CHECK_CODE,
  ENDPOINT_AUTH,
  ENDPOINT_PASSWORD_RESET,
  ENDPOINT_DELETE_DIALOGS,
  ENDPOINT_SPECS,
  ENDPOINT_PROFILE_DESCRIPTIONS,
  ENDPOINT_GET_WORKPLACES,
  ENDPOINT_WORKPLACE_STORE,
  ENDPOINT_WORKPLACE_ADD,
  ENDPOINT_WORKPLACE_DELETE,
  ENDPOINT_WORKPLACE_UPDATE,
  ENDPOINT_POINT_SEARCH_NAME,
  ENDPOINT_PRICE,
  ENDPOINT_PRICE_SAVE,
  // ...
  ENDPOINT_USER_INFO,
  ENDPOINT_USER_INFO_FULL,
  ENDPOINT_SEND_EMAIL,
  ENDPOINT_UPLOAD_PHOTO,
  ENDPOINT_DIALOGS,
  ENDPOINT_DIALOG,
  ENDPOINT_SAVE_PUSH_TOKEN,
  ENDPOINT_GET_BEAUTY_ROOMS,
  ENDPOINT_GET_CITY_INFO,
  ENDPOINT_SERVICES,
  ENDPOINT_SERVICES_CATEGORY,
};

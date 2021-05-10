import {types} from '../actions/user';

const defaultState = {
  loading: false,
  logIn: false,
  city: null,
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
  showOnBoarding: false,
  updateProfile: true,
  specs: [],
  specsUser: [],
  profileDescription: {},
};

const initialState = {
  grant_type: 'password',
  client_id: 2,
  client_secret: 'bwtAjwvRw6lnQdfOKkMHmcJ7JAxF0QwOP6wqaln1',
  phone: '+380',
  password: '',
  ...defaultState
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.AUTH.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.AUTH.SUCCESS:
      const {phone, password, access_token, refresh_token} = action;
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
    case types.REGISTER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER.SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.result,
        showOnBoarding: true,
      };
    case types.REGISTER.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.AUTH.LOGOUT:
      return {
        ...initialState,
      };
    case types.INFO.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.INFO.SUCCESS:
      const {messages, user} = action;
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
      const {dialog, dialog_messages} = action;
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
      let cities = [];
      action.cities.map(function (city) {
        cities.push({
          id: city.id,
          name: city.name,
          checked: city.id === false,
        });
      });
      return {
        ...state,
        user_types: action.types,
        cities,
        loading: false,
      };
    case types.GET_CODE.REQUEST:
      return {
        ...state,
        loading: true,
        sms_code_for_test: '',
      };
    case types.GET_CODE.SUCCESS:
      return {
        ...state,
        loading: false,
        sms_code_for_test: action.code.toString(),
        phone: action.phone,
        city: action.city,
        check_code_from_sms: true,
      };
    case types.GET_CODE.FAILURE:
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
    case types.PASSWORD_RESET.REQUEST:
      return {
        ...state,
        phone: action.phone,
      };
    case types.ON_BOARDING.OFF:
      return {
        ...state,
        showOnBoarding: false,
      };
    case types.DIALOG_DELETE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DIALOG_DELETE.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DIALOG_DELETE.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SPECS.REQUEST:
      return {
        ...state,
        loading: true,
        specs: [],
        specsUser: [],
      };
    case types.SPECS.SUCCESS:
      const specsUser = [];
      action.specs.map((item) => {
        if (item.active) {
          specsUser.push(item.name);
        }
      });
      return {
        ...state,
        loading: false,
        specs: action.specs,
        specsUser,
      };
    case types.SPECS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SPECS_SET.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SPECS_SET.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SPECS_SET.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.PROFILE_DESCRIPTIONS.REQUEST:
      return {
        ...state,
        loading: true,
        profileDescription: {},
      };
    case types.PROFILE_DESCRIPTIONS.SUCCESS:
      return {
        ...state,
        profileDescription: action.data,
        loading: false,
      };
    case types.PROFILE_DESCRIPTIONS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.PROFILE_DESCRIPTION_UPDATE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.PROFILE_DESCRIPTION_UPDATE.SUCCESS:
      return {
        ...state,

        loading: false,
      };
    case types.PROFILE_DESCRIPTION_UPDATE.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

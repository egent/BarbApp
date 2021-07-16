"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = user;

var _user2 = require("../actions/user");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var days = [{
  id: 1,
  title: 'monday',
  workday: 'on',
  time_from: '09:00',
  time_to: '20:00'
}, {
  id: 2,
  title: 'tuesday',
  workday: 'on',
  time_from: '09:00',
  time_to: '20:00'
}, {
  id: 3,
  title: 'wednesday',
  workday: 'on',
  time_from: '09:00',
  time_to: '20:00'
}, {
  id: 4,
  title: 'thursday',
  workday: 'on',
  time_from: '09:00',
  time_to: '20:00'
}, {
  id: 5,
  title: 'friday',
  workday: 'on',
  time_from: '09:00',
  time_to: '20:00'
}, {
  id: 6,
  title: 'saturday',
  workday: 'off',
  time_from: '09:00',
  time_to: '20:00'
}, {
  id: 7,
  title: 'sunday',
  workday: 'off',
  time_from: '09:00',
  time_to: '20:00'
}];
var workspace_breaks = [{
  start: '12:00',
  end: '13:00',
  comment: '',
  days: {
    0: 'off',
    1: 'off',
    2: 'off',
    3: 'off',
    4: 'off',
    5: 'off',
    6: 'off'
  }
}];
var defaultState = {
  loading: false,
  autoCompleteLoading: false,
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
  workspaces: {}
};

var initialState = _objectSpread({
  grant_type: 'password',
  client_id: 2,
  client_secret: 'bwtAjwvRw6lnQdfOKkMHmcJ7JAxF0QwOP6wqaln1',
  phone: '+380',
  password: ''
}, defaultState, {
  city_info: null,
  // add workspace begin
  workspace_type: null,
  beauty_copy: null,
  // from search
  beauty_room: '-1',
  // user beauty room selected
  address_id: '-1',
  // for update address
  beauty_name: '',
  beauty_data: null,
  district_select: null,
  district_select_in_client: [],
  district_select_in_client_string: '',
  sub_district: null,
  metro: null,
  sub_district_select: null,
  sub_district_select_string: '',
  metro_select_string: '',
  metro_select_array: null,
  workspace_address: '',
  workspace_address_comment: '',
  workspace_phones: [],
  scheduleDays: JSON.parse(JSON.stringify(days)),
  scheduleMenuActive: 3,
  schedule_odd: false,
  schedule_odd_time: {
    time_from: null,
    time_to: null
  },
  workspace_breaks: JSON.parse(JSON.stringify(workspace_breaks)),
  breaks_done: [],
  form_workplace_add_data: null,
  userType: null,
  // add workspace end
  showValidationAlert: false,
  // price & services
  price: [],
  priceDescriptionDefault: {},
  priceDescription: {},
  priceSelect: [],
  showPriceSaveBtn: false,
  priceServiceSum: 0
});

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _user2.types.AUTH.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.AUTH.SUCCESS:
      var phone = action.phone,
          password = action.password,
          access_token = action.access_token,
          refresh_token = action.refresh_token;
      return _objectSpread({}, state, {
        loading: false,
        logIn: true,
        phone: phone,
        password: password,
        access_token: access_token,
        refresh_token: refresh_token
      });

    case _user2.types.AUTH.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.REGISTER.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.REGISTER.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        info: action.result,
        showOnBoarding: true
      });

    case _user2.types.REGISTER.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.AUTH.LOGOUT:
      return _objectSpread({}, initialState);

    case _user2.types.INFO.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.INFO.SUCCESS:
      var messages = action.messages,
          _user = action.user;
      return _objectSpread({}, state, {
        messages_new: messages["new"],
        messages_total: messages.total,
        info: _user,
        loading: false
      });

    case _user2.types.INFO.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.INFO_FULL.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.INFO_FULL.SUCCESS:
      return _objectSpread({}, state, {
        info_full: action.user,
        loading: false
      });

    case _user2.types.INFO_FULL.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.INFO_FULL_UPDATE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.INFO_FULL_UPDATE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.INFO_FULL_UPDATE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.SEND_EMAIL.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.SEND_EMAIL.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.SEND_EMAIL.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.UPLOAD_PHOTO.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.UPLOAD_PHOTO.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.UPLOAD_PHOTO.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.DIALOGS.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.DIALOGS.SUCCESS:
      return _objectSpread({}, state, {
        dialogs: action.dialogs,
        loading: false
      });

    case _user2.types.DIALOGS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.DIALOG.REQUEST:
      return _objectSpread({}, state, {
        dialog: [],
        dialog_messages: [],
        loading: true
      });

    case _user2.types.DIALOG.SUCCESS:
      var dialog = action.dialog,
          dialog_messages = action.dialog_messages;
      return _objectSpread({}, state, {
        dialog: dialog,
        dialog_messages: dialog_messages,
        loading: false
      });

    case _user2.types.DIALOG.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.MESSAGE_SEND.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.MESSAGE_SEND.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.MESSAGE_SEND.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.REGISTER_INFO.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.REGISTER_INFO.SUCCESS:
      var cities = [];
      action.cities.map(function (city) {
        cities.push({
          id: city.id,
          name: city.name,
          checked: city.id === false
        });
      });
      return _objectSpread({}, state, {
        user_types: action.types,
        cities: cities,
        loading: false
      });

    case _user2.types.GET_CODE.REQUEST:
      return _objectSpread({}, state, {
        loading: true,
        sms_code_for_test: ''
      });

    case _user2.types.GET_CODE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        sms_code_for_test: action.code.toString(),
        phone: action.phone,
        city: action.city,
        check_code_from_sms: true
      });

    case _user2.types.GET_CODE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.CHECK_CODE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.CHECK_CODE.SUCCESS:
      return _objectSpread({}, state, {
        phone: action.phone,
        password: action.password,
        check_code_from_sms: false,
        loading: false
      });

    case _user2.types.CHECK_CODE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.PASSWORD_RESET.REQUEST:
      return _objectSpread({}, state, {
        phone: action.phone
      });

    case _user2.types.ON_BOARDING.OFF:
      return _objectSpread({}, state, {
        showOnBoarding: false
      });

    case _user2.types.DIALOG_DELETE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.DIALOG_DELETE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.DIALOG_DELETE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.SPECS.REQUEST:
      return _objectSpread({}, state, {
        loading: true,
        specs: [],
        specsUser: []
      });

    case _user2.types.SPECS.SUCCESS:
      var specsUser = [];
      action.specs.map(function (item) {
        if (item.active) {
          specsUser.push(item.name);
        }
      });
      return _objectSpread({}, state, {
        loading: false,
        specs: action.specs,
        specsUser: specsUser
      });

    case _user2.types.SPECS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.SPECS_SET.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.SPECS_SET.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.SPECS_SET.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.PROFILE_DESCRIPTIONS.REQUEST:
      return _objectSpread({}, state, {
        loading: true,
        profileDescription: {}
      });

    case _user2.types.PROFILE_DESCRIPTIONS.SUCCESS:
      return _objectSpread({}, state, {
        profileDescription: action.data,
        loading: false
      });

    case _user2.types.PROFILE_DESCRIPTIONS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.PROFILE_DESCRIPTION_UPDATE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.PROFILE_DESCRIPTION_UPDATE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.PROFILE_DESCRIPTION_UPDATE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.GET_WORKPLACES.SUCCESS:
      var _action$data = action.data,
          addresses = _action$data.addresses,
          type = _action$data.type;
      return _objectSpread({}, state, {
        loading: false,
        workspaces: addresses,
        userType: type
      });

    case _user2.types.FORM.SET:
      return _objectSpread({}, state, {}, action.payload);

    case _user2.types.BEAUTY_ROOMS.REQUEST:
      return _objectSpread({}, state, {
        autoCompleteLoading: true,
        beauty_copy: null
      });

    case _user2.types.BEAUTY_ROOMS.SUCCESS:
      return _objectSpread({}, state, {
        autoCompleteLoading: false,
        beauty_data: action.data.data.salons
      });

    case _user2.types.BEAUTY_ROOMS.FAILURE:
      return _objectSpread({}, state, {
        autoCompleteLoading: false
      });

    case _user2.types.BEAUTY_ROOMS.CLEAR:
      return _objectSpread({}, state, {
        beauty_data: []
      });

    case _user2.types.CITY_INFO.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.CITY_INFO.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        city_info: action.data
      });

    case _user2.types.CITY_INFO.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.WORKPLACE_ADD.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.WORKPLACE_ADD.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.WORKPLACE_ADD.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.BREAKS.DELETE:
      var d = state.breaks_done.filter(function (item, index) {
        return action.index !== index;
      });
      return _objectSpread({}, state, {
        workspace_breaks: JSON.parse(JSON.stringify(workspace_breaks)),
        breaks_done: d
      });

    case _user2.types.WORKPLACE_DELETE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.WORKPLACE_DELETE.SUCCESS:
      var city = _objectSpread({}, state.city_info);

      city.districts.map(function (item) {
        item.checked = false;
      });
      return _objectSpread({}, state, {
        loading: false,
        city_info: city
      });

    case _user2.types.WORKPLACE_DELETE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.BEAUTY_ROOM.ERROR:
      return _objectSpread({}, state, {
        showValidationAlert: true
      });

    case _user2.types.VALIDATION_ALERT.SET:
      return _objectSpread({}, state, {
        showValidationAlert: action.show
      });

    case _user2.types.WORKPLACE_TYPE.SET:
      return _objectSpread({}, state, {
        workspace_type: action.type_id
      });

    case _user2.types.WORKPLACE_UPDATE.SET:
      var type_id = action.type_id; // todo delete in production
      // save workplace add form
      // const form_workplace_add_data = {
      //   workspace_type: state.workspace_type,
      //   beauty_room: state.beauty_room, // user beauty room selected
      //   address_id: state.address_id, // for update address
      //   beauty_name: state.beauty_name,
      //   beauty_data: state.beauty_data,
      //   district_select: state.district_select,
      //   district_select_in_client: state.district_select_in_client,
      //   district_select_in_client_string:
      //     state.district_select_in_client_string,
      //   sub_district: state.sub_district,
      //   metro: state.metro,
      //   sub_district_select: state.sub_district_select,
      //   sub_district_select_string: state.sub_district_select_string,
      //   metro_select_string: state.metro_select_string,
      //   metro_select_array: state.metro_select_array,
      //   workspace_address: state.workspace_address,
      //   workspace_address_comment: state.workspace_address_comment,
      //   workspace_phones: state.workspace_phones,
      //   scheduleDays: JSON.parse(JSON.stringify(state.scheduleDays)),
      //   scheduleMenuActive: state.scheduleMenuActive,
      //   schedule_odd: state.schedule_odd,
      //   workspace_breaks: JSON.parse(JSON.stringify(state.workspace_breaks)),
      // };

      var sub_district = [];
      var metro = [];
      var district_select = null;

      if (type_id !== 3) {
        state.city_info.districts.map(function (d) {
          if (d.id === action.place.district) {
            district_select = d;
            sub_district = d.microdistricts;
            metro = d.metros;
          }
        });
      }

      var district_select_in_client = [];
      var district_select_in_client_string = '';

      if (type_id === 3) {
        var district_select_in_client_arr = [];
        Object.keys(action.place.districts).map(function (item) {
          state.city_info.districts.map(function (d) {
            if (parseInt(item) === d.id) {
              district_select_in_client.push(d);
              district_select_in_client_arr.push(d.name);
            }
          });
        });

        if (district_select_in_client.length > 0) {
          district_select_in_client_string = district_select_in_client_arr.join(', ');
        }
      }

      var sub_district_select = [];
      var sub_district_select_string = '';
      var metro_select_string = '';
      var metro_select_array = [];

      if (type_id !== 3) {
        var sub_districts_arr = [];
        var sub_metro_arr = [];
        Object.values(action.place.microdistricts).map(function (item) {
          try {
            district_select.microdistricts.map(function (m) {
              if (m.id === item) {
                sub_district_select.push(m);
                sub_districts_arr.push(m.name);
              }
            });
          } catch (e) {}
        });
        sub_district_select_string = sub_districts_arr.join(', ');
        Object.values(action.place.metros).map(function (item) {
          try {
            district_select.metros.map(function (m) {
              if (m.id === item) {
                metro_select_array.push(m);
                sub_metro_arr.push(m.name);
              }
            });
          } catch (error) {}
        });
        metro_select_string = sub_metro_arr.join(', ');
      }

      var breaks = action.place.breaks !== null ? _toConsumableArray(JSON.parse(JSON.stringify(action.place.breaks))) : _toConsumableArray(state.breaks_done); // const scheduleDays =
      //   action.place.schedule !== null
      //     ? action.place.schedule.day
      //     : JSON.parse(JSON.stringify(days));

      var scheduleDays = JSON.parse(JSON.stringify(days));

      if (action.place.schedule !== null && action.place.schedule.day !== undefined) {
        scheduleDays = action.place.schedule.day;
      }

      if (action.place.schedule !== null && action.place.schedule.length === 7) {
        scheduleDays = action.place.schedule;
      }

      var schedule_odd_time = {
        time_from: null,
        time_to: null
      };

      if (action.place.schedule_type === 2) {
        var _action$place$schedul = action.place.schedule,
            time_from = _action$place$schedul.time_from,
            time_to = _action$place$schedul.time_to;
        schedule_odd_time = {
          time_from: time_from,
          time_to: time_to
        };
      }

      return _objectSpread({}, state, {
        // form_workplace_add_data,
        workspace_type: type_id,
        beauty_room: action.place.salon_id !== null ? action.place.salon_id : '-1',
        // user beauty room selected
        address_id: action.place.id,
        // for update address
        beauty_name: action.place.salon_name !== undefined ? action.place.salon_name : '',
        beauty_data: null,
        beauty_copy: null,
        district_select: district_select,
        district_select_in_client: district_select_in_client,
        district_select_in_client_string: district_select_in_client_string,
        sub_district: sub_district,
        metro: metro,
        sub_district_select: sub_district_select,
        sub_district_select_string: sub_district_select_string,
        metro_select_string: metro_select_string,
        metro_select_array: metro_select_array,
        workspace_address: action.place.street,
        workspace_address_comment: action.place.comment,
        workspace_phones: action.place.phones,
        scheduleDays: scheduleDays,
        scheduleMenuActive: action.place.schedule_type,
        schedule_odd: !!action.place.schedule_odd,
        breaks_done: breaks,
        schedule_odd_time: schedule_odd_time
      });

    case _user2.types.WORKPLACE_UPDATE.CLEAR:
      return _objectSpread({}, state, {
        workspace_type: null,
        beauty_room: '-1',
        // user beauty room selected
        address_id: '-1',
        // for update address
        salon_address_id: '-1',
        beauty_name: '',
        beauty_data: [],
        district_select: null,
        district_select_in_client: [],
        district_select_in_client_string: '',
        sub_district: null,
        metro: null,
        sub_district_select: null,
        sub_district_select_string: '',
        metro_select_string: '',
        metro_select_array: null,
        workspace_address: '',
        workspace_address_comment: '',
        workspace_phones: [],
        scheduleDays: JSON.parse(JSON.stringify(days)),
        scheduleMenuActive: 3,
        schedule_odd: false,
        schedule_odd_time: {
          time_from: null,
          time_to: null
        },
        workspace_breaks: JSON.parse(JSON.stringify(workspace_breaks)),
        form_workplace_add_data: null,
        breaks_done: [],
        beauty_copy: null
      });
    // case types.WORKPLACE_UPDATE.HISTORY:
    //   return {
    //     ...state,
    //     ...state.form_workplace_add_data,
    //     form_workplace_add_data: null,
    //   };

    case _user2.types.BEAUTY_ROOMS.COPY:
      var _action$place = action.place,
          salon_id = _action$place.salon_id,
          salon_name = _action$place.salon_name,
          address = _action$place.address;
      var district_user_select = null;
      var _sub_district = null;
      var _metro = null;
      state.city_info.districts.map(function (d) {
        if (d.id === address.district) {
          district_user_select = d;
          _sub_district = d.microdistricts;
          _metro = d.metros;
        }
      });
      var sub_district_sel = [];
      var sub_district_sel_names = [];
      address.microdistricts.map(function (item) {
        district_user_select.microdistricts.map(function (m) {
          if (m.id === item) {
            sub_district_sel.push(m);
            sub_district_sel_names.push(m.name);
          }
        });
      });
      var sub_district_sel_string = sub_district_sel_names.join(', ');
      var metro_sel_str = '';
      var metro_sel_array = [];
      var metro_sel_arr = [];
      address.metros.map(function (item) {
        district_user_select.metros.map(function (m) {
          if (m.id === item) {
            metro_sel_array.push(m);
            metro_sel_arr.push(m.name);
          }
        });
      });
      metro_sel_str = metro_sel_arr.join(', ');
      return _objectSpread({}, state, {
        beauty_room: salon_id,
        beauty_name: salon_name,
        workspace_address: address.street,
        district_select: district_user_select,
        metro_select_string: metro_sel_str,
        metro_select_array: metro_sel_array,
        sub_district_select: sub_district_sel,
        sub_district_select_string: sub_district_sel_string,
        sub_district: _sub_district,
        metro: _metro,
        beauty_data: [],
        salon_address_id: address.id,
        beauty_copy: action.place
      });

    case _user2.types.PRICE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.PRICE.SUCCESS:
      var _action$priceInfo$dat = action.priceInfo.data,
          price = _action$priceInfo$dat.price,
          description = _action$priceInfo$dat.description;
      var sum = 0;
      var selected = [];
      price.map(function (_ref) {
        var items = _ref.items;
        items.map(function (item) {
          if (item.active) {
            var _item$procedure = item.procedure,
                price_from = _item$procedure.price_from,
                _price = _item$procedure.price,
                duration = _item$procedure.duration;
            selected.push({
              cat_id: item.id,
              from: price_from,
              cost: _price,
              time: duration
            });
            sum += 1;
          }
        });
      });
      return _objectSpread({}, state, {
        loading: false,
        priceInfo: price,
        priceDescription: description,
        priceDescriptionDefault: description,
        priceServiceSum: sum,
        priceSelect: selected
      });

    case _user2.types.PRICE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.PRICE.CLEAR:
      return _objectSpread({}, state, {
        priceDescription: JSON.parse(JSON.stringify(state.priceDescriptionDefault)),
        priceSelect: [],
        showPriceSaveBtn: false
      });

    case _user2.types.PRICE_SAVE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _user2.types.PRICE_SAVE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.PRICE_SAVE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _user2.types.BREAKS.SAVE:
      var done = [state.workspace_breaks[0]].concat(_toConsumableArray(state.breaks_done));
      return _objectSpread({}, state, {
        loading: false,
        workspace_breaks: JSON.parse(JSON.stringify(workspace_breaks)),
        breaks_done: done
      });

    default:
      return state;
  }
}
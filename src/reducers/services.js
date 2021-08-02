import {types} from '../actions/services';

const initialState = {
  services: [],
  loading: false,
};

export default function services(state = initialState, action = {}) {
  switch (action.type) {
    case types.SERVICES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SERVICES.SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload.data,
      };
    case types.SERVICES.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

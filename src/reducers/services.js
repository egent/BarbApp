import {types} from '../actions/services';

const initialState = {
  loading: false,
  services: [],
  servicesCategory: [],
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
    case types.SERVICES_CATEGORY.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SERVICES_CATEGORY.SUCCESS:
      // todo format data ?
      return {
        ...state,
        loading: false,
        servicesCategory: action.payload.data.categories,
      };
    case types.SERVICES_CATEGORY.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

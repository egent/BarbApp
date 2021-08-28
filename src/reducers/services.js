import {includes, remove} from 'lodash';
import {types} from '../actions/services';

const initialState = {
  loading: false,
  services: [],
  servicesCategory: [],
  // service begin
  serviceId: null,
  serviceName: '',
  serviceCategorySelected: [],
  serviceCategorySelectedStr: '',
  serviceCategoryPhotos: [],
  duration: '',
  priceFrom: false,
  price: '',
  description: '',
  descriptionShort: '',
  // service end
  isServicesManage: false,
  selectedServices: [],
  serviceListKey: Math.random(),
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
        serviceListKey: Math.random(),
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
      const servicesCategory = Object.values(action.payload.data.categories);
      servicesCategory.map((item) => {
        item.checked = false;
      });
      return {
        ...state,
        loading: false,
        servicesCategory,
      };
    case types.SERVICES_CATEGORY.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SERVICE_STATE.UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case types.SERVICES_CATEGORY.SELECT:
      let selected = [];
      action.payload.map((item) => {
        selected.push(item.name);
      });
      return {
        ...state,
        serviceCategorySelected: action.payload,
        serviceCategorySelectedStr: selected.join(', '),
      };
    case types.SERVICES_CATEGORY.PHOTOS:
      const serviceCategoryPhotos = [...state.serviceCategoryPhotos];
      serviceCategoryPhotos.push(action.payload);
      return {
        ...state,
        serviceCategoryPhotos,
      };
    case types.SERVICES_CATEGORY.PHOTO_REMOVE:
      const photos = [];
      state.serviceCategoryPhotos.map((p) => {
        p.uri !== action.payload.uri && photos.push(p);
      });
      return {
        ...state,
        serviceCategoryPhotos: photos,
      };
    case types.SERVICES_ADD.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SERVICES_ADD.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SERVICES_ADD.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SERVICES.MANAGE:
      const manage = action.payload;
      return {
        ...state,
        isServicesManage: manage,
        selectedServices: manage ? state.selectedServices : [],
      };
    case types.SERVICES.SELECT:
      const id = action.payload;
      let selServices = [...state.selectedServices];
      if (includes(selServices, id)) {
        selServices = remove(selServices, (s) => {
          return s !== id;
        });
      } else {
        selServices.push(id);
      }
      return {
        ...state,
        selectedServices: selServices,
      };
    case types.SERVICES_UPDATE_STATUS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SERVICES_UPDATE_STATUS.SUCCESS:
      return {
        ...state,
        loading: false,
        selectedServices: [],
      };
    case types.SERVICES_UPDATE_STATUS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SERVICE_UPDATE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SERVICE_UPDATE.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SERVICE_UPDATE.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SERVICE_DETAILS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SERVICE_DETAILS.SUCCESS:
      const {procedure, procedureCats, gallery} = action.payload.data;
      // todo .. category name?
      return {
        ...state,
        loading: false,
        serviceId: procedure.id,
        serviceName: procedure.name,
        serviceCategorySelected: procedureCats,
        // serviceCategorySelectedStr: '',
        serviceCategoryPhotos: gallery,
        duration: procedure.duration,
        priceFrom: procedure.price_from,
        price: procedure.price,
        description: procedure.description,
        descriptionShort: procedure.anons,
      };
    case types.SERVICE_DETAILS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

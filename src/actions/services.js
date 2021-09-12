export const types = {
  SERVICES: {
    REQUEST: 'SERVICES.REQUEST',
    SUCCESS: 'SERVICES.SUCCESS',
    FAILURE: 'SERVICES.FAILURE',
    MANAGE: 'SERVICES.MANAGE',
    SELECT: 'SERVICES.SELECT',
  },
  SERVICES_CATEGORY: {
    REQUEST: 'SERVICES_CATEGORY.REQUEST',
    SUCCESS: 'SERVICES_CATEGORY.SUCCESS',
    FAILURE: 'SERVICES_CATEGORY.FAILURE',
    SELECT: 'SERVICES_CATEGORY.SELECT',
    PHOTOS: 'SERVICES_CATEGORY.PHOTOS',
    PHOTO_REMOVE: 'SERVICES_CATEGORY.PHOTO_REMOVE',
  },
  SERVICE_STATE: {
    UPDATE: 'SERVICE_STATE.UPDATE',
  },
  SERVICES_ADD: {
    REQUEST: 'SERVICES_ADD.REQUEST',
    SUCCESS: 'SERVICES_ADD.SUCCESS',
    FAILURE: 'SERVICES_ADD.FAILURE',
  },
  SERVICE_DETAILS: {
    REQUEST: 'SERVICE_DETAILS.REQUEST',
    SUCCESS: 'SERVICE_DETAILS.SUCCESS',
    FAILURE: 'SERVICE_DETAILS.FAILURE',
  },
  SERVICE_UPDATE: {
    REQUEST: 'SERVICE_UPDATE.REQUEST',
    SUCCESS: 'SERVICE_UPDATE.SUCCESS',
    FAILURE: 'SERVICE_UPDATE.FAILURE',
  },
  SERVICES_UPDATE_STATUS: {
    REQUEST: 'SERVICES_UPDATE_STATUS.REQUEST',
    SUCCESS: 'SERVICES_UPDATE_STATUS.SUCCESS',
    FAILURE: 'SERVICES_UPDATE_STATUS.FAILURE',
  },
  PROMOS: {
    REQUEST: 'PROMOS.REQUEST',
    SUCCESS: 'PROMOS.SUCCESS',
    FAILURE: 'PROMOS.FAILURE',
    PHOTO_ADD: 'PROMOS.PHOTO_ADD',
    PHOTO_DELETE: 'PROMOS.PHOTO_DELETE',
    MANAGE: 'PROMOS.MANAGE',
    SELECT: 'PROMOS.SELECT',
  },
  PROMOS_CATS: {
    REQUEST: 'PROMOS_CATS.REQUEST',
    SUCCESS: 'PROMOS_CATS.SUCCESS',
    FAILURE: 'PROMOS_CATS.FAILURE',
    SELECT: 'PROMOS_CATS.SELECT',
  },
  PROMO_ADD: {
    REQUEST: 'PROMO_ADD.REQUEST',
    SUCCESS: 'PROMO_ADD.SUCCESS',
    FAILURE: 'PROMO_ADD.FAILURE',
  },
  PROMO_UPDATE: {
    REQUEST: 'PROMO_UPDATE.REQUEST',
    SUCCESS: 'PROMO_UPDATE.SUCCESS',
    FAILURE: 'PROMO_UPDATE.FAILURE',
  },
  PROMO_DETAILS: {
    REQUEST: 'PROMO_DETAILS.REQUEST',
    SUCCESS: 'PROMO_DETAILS.SUCCESS',
    FAILURE: 'PROMO_DETAILS.FAILURE',
  },
  PROMO_STATUS: {
    REQUEST: 'PROMO_STATUS.REQUEST',
    SUCCESS: 'PROMO_STATUS.SUCCESS',
    FAILURE: 'PROMO_STATUS.FAILURE',
  },
};

export const servicesRequest = (data) => ({
  type: types.SERVICES.REQUEST,
  ...data,
});

export const servicesSuccess = (data) => ({
  type: types.SERVICES.SUCCESS,
  ...data,
});

export const servicesFailure = (data) => ({
  type: types.SERVICES.FAILURE,
  ...data,
});

export const servicesCategoryRequest = (data) => ({
  type: types.SERVICES_CATEGORY.REQUEST,
  ...data,
});

export const servicesCategorySuccess = (data) => ({
  type: types.SERVICES_CATEGORY.SUCCESS,
  ...data,
});

export const servicesCategoryFailure = (data) => ({
  type: types.SERVICES_CATEGORY.FAILURE,
  ...data,
});

export const servicesStateUpdate = (data) => ({
  type: types.SERVICE_STATE.UPDATE,
  ...data,
});

export const servicesCategorySelect = (payload) => ({
  type: types.SERVICES_CATEGORY.SELECT,
  payload,
});

export const servicesCategoryPhotos = (payload) => ({
  type: types.SERVICES_CATEGORY.PHOTOS,
  payload,
});

export const servicesCategoryPhotoRemove = (payload) => ({
  type: types.SERVICES_CATEGORY.PHOTO_REMOVE,
  payload,
});

export const serviceAddRequest = (payload) => ({
  type: types.SERVICES_ADD.REQUEST,
  payload,
});

export const serviceAddSuccess = (data) => ({
  type: types.SERVICES_ADD.SUCCESS,
  ...data,
});

export const serviceAddFailure = (data) => ({
  type: types.SERVICES_ADD.FAILURE,
  ...data,
});

export const serviceUpdateRequest = (payload) => ({
  type: types.SERVICE_UPDATE.REQUEST,
  payload,
});

export const serviceUpdateSuccess = (data) => ({
  type: types.SERVICE_UPDATE.SUCCESS,
  ...data,
});

export const serviceUpdateFailure = (data) => ({
  type: types.SERVICE_UPDATE.FAILURE,
  ...data,
});

export const servicesManage = (payload) => ({
  type: types.SERVICES.MANAGE,
  payload,
});

export const servicesSelect = (payload) => ({
  type: types.SERVICES.SELECT,
  payload,
});

export const serviceUpdateStatusRequest = (payload) => ({
  type: types.SERVICES_UPDATE_STATUS.REQUEST,
  payload,
});

export const serviceUpdateStatusSuccess = (data) => ({
  type: types.SERVICES_UPDATE_STATUS.SUCCESS,
  ...data,
});

export const serviceUpdateStatusFailure = (data) => ({
  type: types.SERVICES_UPDATE_STATUS.FAILURE,
  ...data,
});

export const serviceDetailsRequest = (payload) => ({
  type: types.SERVICE_DETAILS.REQUEST,
  payload,
});

export const serviceDetailsSuccess = (data) => ({
  type: types.SERVICE_DETAILS.SUCCESS,
  ...data,
});

export const serviceDetailsFailure = (data) => ({
  type: types.SERVICE_DETAILS.FAILURE,
  ...data,
});

export const promosRequest = (payload) => ({
  type: types.PROMOS.REQUEST,
  payload,
});

export const promosSuccess = (data) => ({
  type: types.PROMOS.SUCCESS,
  ...data,
});

export const promosFailure = (data) => ({
  type: types.PROMOS.FAILURE,
  ...data,
});

export const promosCatsRequest = (payload) => ({
  type: types.PROMOS_CATS.REQUEST,
  payload,
});

export const promosCatsSuccess = (data) => ({
  type: types.PROMOS_CATS.SUCCESS,
  ...data,
});

export const promosCatsFailure = (data) => ({
  type: types.PROMOS_CATS.FAILURE,
  ...data,
});

export const promosCatsSelect = (data) => ({
  type: types.PROMOS_CATS.SELECT,
  data,
});

export const addPromoPhoto = (data) => ({
  type: types.PROMOS.PHOTO_ADD,
  data,
});

export const deletePromoPhoto = (data) => ({
  type: types.PROMOS.PHOTO_DELETE,
  data,
});

export const promoAddRequest = (payload) => ({
  type: types.PROMO_ADD.REQUEST,
  payload,
});

export const promoAddSuccess = (data) => ({
  type: types.PROMO_ADD.SUCCESS,
  ...data,
});

export const promoStoreFailure = (data) => ({
  type: types.PROMO_ADD.FAILURE,
  ...data,
});

export const promoUpdateRequest = (payload) => ({
  type: types.PROMO_UPDATE.REQUEST,
  payload,
});

export const promoUpdateSuccess = (data) => ({
  type: types.PROMO_UPDATE.SUCCESS,
  ...data,
});

export const promoUpdateFailure = (data) => ({
  type: types.PROMO_UPDATE.FAILURE,
  ...data,
});

export const promoDetailsRequest = (payload) => ({
  type: types.PROMO_DETAILS.REQUEST,
  payload,
});

export const promoDetailsSuccess = (data) => ({
  type: types.PROMO_DETAILS.SUCCESS,
  ...data,
});

export const promoDetailsFailure = (data) => ({
  type: types.PROMO_DETAILS.FAILURE,
  ...data,
});

export const promosManage = (payload) => ({
  type: types.PROMOS.MANAGE,
  payload,
});

export const promosSelect = (payload) => ({
  type: types.PROMOS.SELECT,
  payload,
});

export const promoStatusUpdateRequest = (payload) => ({
  type: types.PROMO_STATUS.REQUEST,
  payload,
});

export const promoStatusUpdateSuccess = (data) => ({
  type: types.PROMO_STATUS.SUCCESS,
  ...data,
});

export const promoStatusUpdateFailure = (data) => ({
  type: types.PROMO_STATUS.FAILURE,
  ...data,
});

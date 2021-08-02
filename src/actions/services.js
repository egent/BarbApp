export const types = {
  SERVICES: {
    REQUEST: 'SERVICES.REQUEST',
    SUCCESS: 'SERVICES.SUCCESS',
    FAILURE: 'SERVICES.FAILURE',
  },
  SERVICES_CATEGORY: {
    REQUEST: 'SERVICES_CATEGORY.REQUEST',
    SUCCESS: 'SERVICES_CATEGORY.SUCCESS',
    FAILURE: 'SERVICES_CATEGORY.FAILURE',
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

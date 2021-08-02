export const types = {
  SERVICES: {
    REQUEST: 'SERVICES.REQUEST',
    SUCCESS: 'SERVICES.SUCCESS',
    FAILURE: 'SERVICES.FAILURE',
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

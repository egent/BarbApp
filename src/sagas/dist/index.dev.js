"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rootSaga;

var _effects = require("redux-saga/effects");

var _user = require("./user");

var _services = require("./services");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([// user
          (0, _user.watchAuthSaga)(), (0, _user.watchUserInfoSaga)(), (0, _user.watchUserInfoFullSaga)(), (0, _user.watchUserInfoFullUpdateSaga)(), (0, _user.watchSendEmailSaga)(), (0, _user.watchUploadPhotoSaga)(), (0, _user.watchDialogsSaga)(), (0, _user.watchDialogSaga)(), (0, _user.watchMessageSendSaga)(), (0, _user.watchSaveTokenSaga)(), (0, _user.watchRegisterInfoSaga)(), (0, _user.watchRegisterSaga)(), (0, _user.watchCheckCodeSaga)(), (0, _user.watchGetCodeSaga)(), (0, _user.watchPasswordResetSaga)(), (0, _user.watchDialogDeleteSaga)(), (0, _user.watchSpecsSaga)(), (0, _user.watchSpecsSetSaga)(), (0, _user.watchProfileDescriptionsSaga)(), (0, _user.watchProfileDescriptionUpdateSaga)(), (0, _user.watchGetWorkspacesSaga)(), (0, _user.watchBeautyRoomsSaga)(), (0, _user.watchCityInfoSaga)(), (0, _user.watchWorkspaceAddSaga)(), (0, _user.watchWorkspaceDeleteSaga)(), (0, _user.watchBeautyRoomSendSaga)(), (0, _user.watchWorkplaceUpdateSaga)(), (0, _user.watchPriceSaga)(), (0, _user.watchPriceUpdateSaga)(), // services
          (0, _services.watchServices)(), (0, _services.watchServicesCategory)()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
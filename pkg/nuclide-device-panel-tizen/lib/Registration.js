'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.


















registerDevicePanelProviders = registerDevicePanelProviders;var _UniversalDisposable;function _load_UniversalDisposable() {return _UniversalDisposable = _interopRequireDefault(require('nuclide-commons/UniversalDisposable'));}var _DevicePoller;function _load_DevicePoller() {return _DevicePoller = require('../../nuclide-adb-sdb-base/lib/DevicePoller');}var _TizenDeviceInfoProvider;function _load_TizenDeviceInfoProvider() {return _TizenDeviceInfoProvider = require('./providers/TizenDeviceInfoProvider');}var _TizenDeviceProcessesProvider;function _load_TizenDeviceProcessesProvider() {return _TizenDeviceProcessesProvider = require('./providers/TizenDeviceProcessesProvider');}var _TizenDeviceStopProcessProvider;function _load_TizenDeviceStopProcessProvider() {return _TizenDeviceStopProcessProvider = require('./providers/TizenDeviceStopProcessProvider');}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the license found in the LICENSE file in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @format
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */function registerDevicePanelProviders(api) {let lastRegistration;return new (_UniversalDisposable || _load_UniversalDisposable()).default(() => {if (lastRegistration != null) {lastRegistration.dispose();}},
  atom.config.observe(
  'nuclide.nuclide-device-panel-tizen.register',
  value => {
    if (lastRegistration != null) {
      lastRegistration.dispose();
    }
    if (value) {
      lastRegistration = new (_UniversalDisposable || _load_UniversalDisposable()).default(
      api.registerListProvider({
        getType: () => 'Tizen',
        observe: host => (0, (_DevicePoller || _load_DevicePoller()).observeTizenDevicesX)(host) }),

      api.registerInfoProvider(new (_TizenDeviceInfoProvider || _load_TizenDeviceInfoProvider()).TizenDeviceInfoProvider()),
      api.registerProcessesProvider(new (_TizenDeviceProcessesProvider || _load_TizenDeviceProcessesProvider()).TizenDeviceProcessesProvider()),
      api.registerProcessTaskProvider(
      new (_TizenDeviceStopProcessProvider || _load_TizenDeviceStopProcessProvider()).TizenDeviceStopProcessProvider()));


    }
  }));


}
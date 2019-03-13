(function () {

  'use strict';

  window.remoteConfigs = window.remoteConfigs || {}

  window.remoteConfigs['logitech-r400'] = {
    'down(PageUp)': {
      command: 'go-to-previous-step',
      commandArgs: { secret: false },
    },
    'down(PageDown)': {
      command: 'go-to-next-step',
      commandArgs: { secret: false },
    },
  }
})()

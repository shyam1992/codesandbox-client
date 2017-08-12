// @flow
// All actions of the editor are defined here. The sandbox can send messages
// like `source.files.rename` which the editor will see as an action to rename
// a module. This will allow plugins to alter project content in the future

import * as notifications from './notifications';

import sendMessage from '../utils/send-message';

const actions = {
  notifications,
};

export const dispatch = sendMessage;

export default actions;
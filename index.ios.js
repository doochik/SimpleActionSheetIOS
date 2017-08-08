'use strict';

import {
    ActionSheetIOS,
} from 'react-native';

/**
 * Handy wrapper for ActionSheetIOS.
 * @param {object} actionSheetOptions Options for ActionSheetIOS.showActionSheetWithOptions()
 * @param {ActionSheetOption[]} actionSheetOptions.options A list of buttons
 * @param {string} [actionSheetOptions.title] A title to show above the action sheet
 * @param {string} [actionSheetOptions.message] A message to show below the title
 */
export default ({ options, title, message }) => {
    let cancelButtonIndex = -1;
    let destructiveButtonIndex = -1;
    const optionTitles = options.map((option, i) => {
        if (option.isCancel) {
            cancelButtonIndex = i;
        } else if (option.isDestructive) {
            destructiveButtonIndex = i;
        }
        return option.title;
    });

    ActionSheetIOS.showActionSheetWithOptions({
        options: optionTitles,
        cancelButtonIndex,
        destructiveButtonIndex,
        message,
        title,
    }, (buttonIndex) => {
        const option = options[buttonIndex];
        if (option.callback) {
            option.callback();
        }
    });
};

/**
 * @typedef {object} ActionSheetOption
 * @property {string} ActionSheetOption.title Button title
 * @property {function} [ActionSheetOption.callback] Button callback
 * @property {boolean} [ActionSheetOption.isCancel] "true" if button has cancel action
 * @property {boolean} [ActionSheetOption.isDestructive] "true" if button has destructive action
 */

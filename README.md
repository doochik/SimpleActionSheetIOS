[![NPM version](https://badge.fury.io/js/react-native-simple-action-sheet-ios.svg)](http://badge.fury.io/js/react-native-simple-action-sheet-ios)

# SimpleActionSheetIOS
Handy wrapper for react-native ActionSheetIOS.

`ActionSheetIOS.showActionSheetWithOptions` has inconvenient API:
```
ActionSheetIOS.showActionSheetWithOptions({
    options: [
        'button1',
        'button2',
        'button3',
    ],
    cancelButtonIndex: 2,
    destructiveButtonIndex: 0
}, (buttonIndex) => {
    if (buttonIndex === 0) {
        // do something...    
    } else if (buttonIndex === 1) {
        // do something...
    }
})
```

SimpleActionSheetIOS simplifies this API
```
import simpleActionSheetIOS from 'react-native-simple-action-sheet-ios';

simpleActionSheetIOS({
    options: [
        { title: 'button1', callback: myFn1, isDestructive: true },
        { title: 'button2', callback: myFn2 },
        { title: 'button3', callback: myFn3, isCancel: true },
    ]
});
```

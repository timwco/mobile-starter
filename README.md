# Mobile Starter Project

This is a simple mobile starter template to get started. I've found using React Native templates can be problematic with the rapidly changing versions, so instead I'll be keeping this up to date. This takes a bit more work, but is faster than doing it all by hand. 

This includes the following:

* My prefered structure (the whole reason for using this)
* React Navigation
* Redux (Autodux)
* Reactotron Integration (Redux included)
* BootSplash Setup
* Babel Config (makes imports easier)


## Notices

* Check the `package.json` file for React/React-Native version numbers.

## Usage

* First check all of the `TODO` messages (grep for them)
* Install React Native normally, then add over the following modules


```
yarn add @react-native-community/async-storage, @react-native-community/masked-view, @react-navigation/native, @react-navigation/stack, https://github.com/twhitacre/autodux, prop-types, react-native-bootsplash, react-native-gesture-handler, react-native-reanimated, react-native-safe-area-context, react-native-screens, react-redux, reactotron-react-native, reactotron-redux, redux
```

Then install the following for dev

```
yarn add --dev babel-plugin-import, babel-plugin-module-resolver
```

## Dependencies

For most packages listed above, just ensure you install the pods `cd ios && pod install && cd ..`

For [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started.html), follow the getting started guide for implementation. 

For [`react-native-bootsplash`](https://github.com/zoontek/react-native-bootsplash), first modify the `icon.png` file, then follow the tutorial on the page to set it all up.


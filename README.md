# This repository was initiated with create-react-native-web-app

[![NPM](https://nodei.co/npm/create-react-native-web-app.png)](https://npmjs.org/package/create-react-native-web-app)

![GitHub issues](https://img.shields.io/github/issues/orYoffe/create-react-native-web-app.svg)
![license](https://img.shields.io/github/license/orYoffe/create-react-native-web-app.svg)
![GitHub top language](https://img.shields.io/github/languages/top/orYoffe/create-react-native-web-app.svg)
![npm](https://img.shields.io/npm/v/create-react-native-web-app.svg)

### A simple CLI tool to start your React Native Web project to develop same app for IOS Android and Web

<p align="center" >
<img width="300"  src="https://raw.githubusercontent.com/orYoffe/create-react-native-web-app/master/template/src/logo.png">
</p>

## Installation

```sh


# cd into your <project-directory>
$ yarn install

# Run Web/Ios/Android development
# Web
$ yarn web

# IOS (simulator)
$ cd ios
$ pod install
$ cd ..
$ yarn ios

# Android (connected device)
$ yarn android

```

- To work with IOS and Android - Install Xcode and Android studio and follow the react native instructions [under the "Building Projects with Native Code" tab](http://facebook.github.io/react-native/docs/getting-started.html)

<p align="center" >
<img width="1000"  src="https://raw.githubusercontent.com/orYoffe/create-react-native-web-app/master/cli_preview.png">
</p>

## Folder structure

```
myApp
├── android (When opening with Android studio, open this folder)
│   └── android project files
├── ios (When opening with Xcode, open this folder)
│   └── ios project files
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    └── project code
```

## Resources

- [React Native for Web (react-native-web)](https://github.com/necolas/react-native-web)
- [React](https://reactjs.org/)
- [React Native](http://facebook.github.io/react-native/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Create React Native App](https://github.com/react-community/create-react-native-app)

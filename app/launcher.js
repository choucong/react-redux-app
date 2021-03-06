/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import App from  './containers/app';

const store = configureStore();

export default class Launcher extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
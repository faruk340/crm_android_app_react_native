import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './service/reducers/index'
const store = createStore(rootReducer)

export default function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import '@zendeskgarden/react-select/dist/styles.css';

import Main from './containers/Main';

import { ThemeProvider } from '@zendeskgarden/react-theming';

const store = createStore(reducer,
    compose(
        applyMiddleware(
            thunk,
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
);

render((
    <Provider store={store}>
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    </Provider>
), document.getElementById('app'));

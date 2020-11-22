import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './store/index';

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <CssBaseline/>
             <Routes/>
            </BrowserRouter>
            </Provider>
    )
}

export default App

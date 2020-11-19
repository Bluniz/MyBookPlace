import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Header/index.js';
import SearchBar from './components/SearchBar/index.js';

function App() {
    return (
        <div className="App">
          <CssBaseline/>
            <Home />
            <SearchBar/>
        </div>
    )
}

export default App

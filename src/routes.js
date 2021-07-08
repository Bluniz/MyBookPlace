import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './pages/Search/index.jsx'
import BookDetail from './pages/BookDetail/index.jsx'
import Home from './pages/Home/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/book/:id" component={BookDetail} />
            <Route exact path="/*" component={NotFound} />
        </Switch>
    )
}

export default Routes

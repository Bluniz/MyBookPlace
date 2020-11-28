import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './pages/Search'
import BookDetail from './pages/BookDetail/index'
import Home from './pages/Home/index'
import NotFound from './pages/NotFound'

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

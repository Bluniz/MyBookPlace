import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import BookDetailPage from './pages/BookDetailPage'
import HomePage from './pages/HomePage/index'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/book/:id" component={BookDetailPage} />
        </Switch>
    )
}

export default Routes

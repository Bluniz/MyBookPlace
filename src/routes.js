import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';


const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/book/:id" component={BookDetailPage}/>
    </Switch>
  )
}


export default Routes
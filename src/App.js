import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/Authentication/PrivateRoute';
import Dashboard from './components/Authentication/Dashboard';
import ChooseLeaderBoard from './components/Quiz/ChooseLeaderBoard';
import Categories from './components/Quiz/Categories';
import UpdateProfile from './components/Authentication/UpdateProfile';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgotPassword';

//const API_URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' exact component={Categories} /> */}
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path='/ChooseLeaderBoard' exact component={ChooseLeaderBoard} />
        <Route path='/Categories' exact component={Categories} />


      </Switch>
    </BrowserRouter>)
}

export default App;
//{/*<Display api={'https://opentdb.com/api.php?amount=10&category=9&type=multiple'}  title = {/>*/}
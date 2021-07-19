import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Component/Login.js';
import Profile from './Component/Profile.js';
import Register from './Component/Register';
import UserList from './Component/UserApi';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path='/' component={Login}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/user" component={UserList}></Route>
            <Footer />
        </BrowserRouter>
    )

}

export default Routing;

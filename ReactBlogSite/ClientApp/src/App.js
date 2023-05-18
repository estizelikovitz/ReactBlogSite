import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Home';
import AddBlog from './AddBlog';
import MostRecent from './MostRecent';
import Layout from './Layout';
import ViewBlog from './ViewBlog';

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/page/:page?' component={Home} />
                <Route exact path='/addblog' component={AddBlog} />
                <Route exact path='/mostrecent' component={MostRecent} />
                <Route exact path='/viewblog/:id' component={ViewBlog} />
            </Layout>
        );
    }
}
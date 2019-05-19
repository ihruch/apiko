import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListTodo from "./../ListTodo";

class Main extends Component {

    render() {
        return(      
            <Switch>
                <Route  path='/all' render={ props => (
                    <ListTodo {...props} data={this.props}  filter={'all'}/>
                )} />

                <Route  path='/active' render={ props => (
                    <ListTodo {...props} data={this.props} filter={'active'} />
                )} />
                
                <Route  path='/completed' render={ props => (
                    <ListTodo  {...props} data={this.props} filter={'completed'}  />
                )} />
                
                <Redirect to="/all" />
            </Switch>
        )
    }
}

export default Main;
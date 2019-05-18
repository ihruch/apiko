import "./style.css";
import React, { Component } from 'react';
import ListItemTodo from "./../ListItemTodo"
import List from '@material-ui/core/List';

class ListTodo extends Component {

    render() {
        return (
            <List>
                {   
                   this.props.items.map( todo => (<ListItemTodo key={todo.id} {...this.props} todo={todo}/>))                  
                }
            </List>   
        );
    }   
}

export default ListTodo;




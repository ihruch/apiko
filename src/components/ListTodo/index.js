import "./style.css";
import React, { Component } from 'react';
import ListItemTodo from "./../ListItemTodo"
import List from '@material-ui/core/List';


class ListTodo extends Component {
    
    filterData = (data, filter) => {
        switch (filter) {
            case 'all':
                return data.items;
            case 'active':
                return data.items.filter( i => !i.completed);;
            case 'completed':
                return data.items.filter( i => i.completed);
        }
    }

    render() {
        console.log("ListTodo ", this.props)
        const {data, filter,  ...props} = this.props;

        return (
            <List>
                {   
                    (this.filterData(data, filter) || []).map( todo => (<ListItemTodo key={todo.id} {...this.props} todo={todo}/>))                  
                }
            </List>   
        );
    }   
}

export default ListTodo;




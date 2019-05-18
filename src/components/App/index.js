import React, {Component} from 'react';
import Form from "./../Form";
import Footer from "./../Footer";
import ListTodo from "./../ListTodo";
import links from "./../../consts/route-consts.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './style.css';

class App extends Component {
  state = {
    todo: {
      id: 0,
      title: '',
      completed: false
      },
    listTodo: []
  } 
  
  count = 1;
  input = null;
  checkBox = false;

  onSubmit = (e) => {
    e.preventDefault();
    const val = this.state.todo.title.trim(); 
    if(!val) return;
    
    this.setState({
      todo: { title: '', completed: false, id: 0 },
      listTodo: [...this.state.listTodo, { ...this.state.todo, id: this.count++} ].reverse()
    });
    e.target.reset();   
  }

  onChange = (e) => {
    this.setState({ todo: {title: e.target.value, completed: false, id: 0} })
  }

  handleChange = (id) => {
   
    this.setState( state => {
      let newListTodo = this.state.listTodo.map( item => {
        if(item.id == id){
          item.completed = !item.completed;
          return item;
        }else {
          return item;
        }
        });
        console.log(newListTodo);
        return {
          listTodo: newListTodo
        }
      });
   
  }

  removeTodoitem = (id) => {
    console.log("removeTodoitem", id);

    this.setState( state => {
      let nListTodo = this.state.listTodo.filter((item) => {
        return (item.id !== id);
      })

      console.log("object nListTodo", nListTodo);
      return {
        listTodo: nListTodo
      }


    })
  }

  render() {
    console.log('state app component',  this.state );
    console.log(this.state.todo.completed);
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={6} style={{ width: "100%"}}>
          <Paper>
            <h1 className="title-app">todo </h1>
          </Paper>
          <Paper>
            <Form innnerRef={ ref => (this.input = ref) } onSubmit={this.onSubmit} onChange={this.onChange} />  
            <ListTodo items={this.state.listTodo}  onChange={this.handleChange} onClick={this.removeTodoitem} /> 
            <Footer routers={links} />  
          </Paper>
        </Grid>  
         
      </Grid>
    );
  }
}

export default App;

/*
      <div className="wrapper">
          <h1>App component </h1> 
          <Form innnerRef={ ref => (this.input = ref) } onSubmit={this.onSubmit} onChange={this.onChange} />  
          <ListTodo items={this.state.listTodo}   onChange={this.handleChange}/> 
          <Footer routers={links} />   
      </div>
*/

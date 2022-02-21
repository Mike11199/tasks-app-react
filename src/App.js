import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  
  constructor() {
    super();  //used to call the constructor of its parent class.  used to access some variables of its parent class
  
    this.state ={
      task: {
        text: '',
        id: uniqid()
    },                      //assigned task to an object and task.text to an empty string
      tasks: [],           //tasks is initailly set to an empty array
    };
  }
 

  //this will be the onChange handler for the input field.  It will set the current task in state to whatever is typed in the input field.
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }

    });
  };


  //this is the onSubmit handler for the form element that is invoked by clicking the button.
  //.epreventdefault() is called to prevent the default behavior of refreshing the form after it is submitted
  //we DON'T directly assign state or use the push method as it would give us an error

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),  //magic:  this adds the tasks in the input field when we submit the form to the tasks array
      task: { 
        text: '',
        id: uniqid()
      },                                //set task back to an empty string so that more tasks can be added
    });
  };



//this is the method that actually adds component to the DOM
  render() {
    const { task, tasks } = this.state;



//here we add an onChange handler to the input element and an onSubmitTask to the form element to invoke the functions we created
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type="text" 
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;

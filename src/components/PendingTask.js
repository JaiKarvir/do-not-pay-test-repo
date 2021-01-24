import React from "react";
import  NewTask from "./NewTask";

class PendingTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTask: false,
            title: "",
            body: "",
            tasks = [
                {title: 'task1', body: 'task1 body'},
                {title: 'task2', body: 'task2 body'}
            ]
        }
        this.handlePendingTask = this.handlePendingTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }
    handlePendingTask = () =>{
        this.setState({addTask: !this.state.addTask})
    }
    render(){
        let newTask = null;
        if(this.state.addTask){
           newTask =  <div>
           <form>
           <div>
             <input type="text" value={this.state.title} placeholder="Title"  onChange={(event) => this.setState({title: event.target.value})}  />
           </div>
           <div>
             <input type="text" value={this.state.body} placeholder="Body" onChange={(event) => this.setState({body: event.target.value})} />
           </div>
           <button onClick={this.addTask}>Add</button>
          </form>
           </div>
        }
        return(
            <div>
            <h1>Pending Task</h1>
            <button onClick={this.handlePendingTask}>+</button>
            {newTask}
            </div>
        )
    }
}

export default PendingTask;
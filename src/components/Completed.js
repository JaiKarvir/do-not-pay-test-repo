import React from "react";
import  NewTask from "./NewTask";

class Completed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTask: false,
            title: "",
            body: "",
            tasks: [
                {title: 'task1', body: 'task1 body'},
                {title: 'task2', body: 'task2 body'}
            ]
        }
        this.handleCompletedTask = this.handleCompletedTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }
    handleCompletedTask = () =>{
        this.setState({addTask: !this.state.addTask})
    }

    addTask = () =>{
        const newTask ={
            title:this.state.title,
            body:this.state.body         
        }
     
        let taskslist = [...this.state.tasks];
        let updatedTasksList = taskslist.concat(newTask);
        this.setState({
            tasks: updatedTasksList,
            title:"",
             body:""
          });
    }

    handleDeleteTask = (i) =>{
        let taskslist = [...this.state.tasks];
        let updatedTasksList = taskslist.splice(i,1);
        this.setState({
            tasks: updatedTasksList
          });
    }

    render(){
        let addTaskBox = null;
        if(this.state.addTask){
            addTaskBox =  <div>
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
            <h1>Completed</h1>
            <button onClick={this.handleCompletedTask}>+</button>
            {addTaskBox}
            {this.state.tasks.map((task,i) =>
                <NewTask task = {task} key={i} deleteTask = {() => this.handleDeleteTask(i)}/>
             )} 
            </div>
        )
    }
}

export default Completed;
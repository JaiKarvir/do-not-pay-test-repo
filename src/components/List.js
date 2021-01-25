import React from 'react';
import TaskName from './TaskName';
import './List.css';
import NewForm from './NewForm'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTaskForm: false,
            addTaskFormProp:{
                title: 'Title',
                body: 'body',
                taskName:'Pending'
            }
        }
        this.handleAddTaskForm = this.handleAddTaskForm.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTaskForm =()=>{
        this.setState({addTaskForm: !this.state.addTaskForm});
    }
    handleTitleChange =(event)=>{
        this.setState({addTaskFormProp:{title: event.target.value, body: this.state.addTaskFormProp.body}})
    }
    handleBodyChange =(event)=>{
        this.setState({addTaskFormProp:{title: this.state.addTaskFormProp.title,body: event.target.value}})
    }

    handleAddTask =(event)=>{
        event.preventDefault();
        const newTask = {
            title: this.state.addTaskFormProp.title,
            body: this.state.addTaskFormProp.body,
            taskName: this.props.list.TaskName
        }
        this.props.addTask(newTask);
        this.setState({addTaskForm: !this.state.addTaskForm});

    }
    render(){
       const tasks =  this.props.list.tasks.map((task,index)=>{
            return(<li key={index} className="new-task">
                <TaskName task = {task} onDragStart={this.props.onDragStart} deleteTask={(id)=>this.props.deleteTask(id)}/>
            </li>)
        }
        )

        let showForm = false;
        if(this.state.addTaskForm){
            showForm = <NewForm 
                        addTaskFormProp={this.state.addTaskFormProp} 
                        handleTitleChange={this.handleTitleChange} 
                        handleBodyChange={this.handleBodyChange}
                        handleAddTask = {(event)=>this.handleAddTask(event)}
                        />
        }

        return(
            <div className="action-box">
                <h1>{this.props.list.TaskName}</h1>
                <button onClick={this.handleAddTaskForm}>Add Task</button>
                {showForm}
                <ul onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}>
                {tasks}
                </ul>
            </div>
        );
    }
}

export default List;
import React from "react";
import './NewTask.css';

class NewTask extends React.Component{
    render(){
        return(
        <div className="new-task">
            <h5>{this.props.task.title}</h5>
            <p>{this.props.task.body}</p>
            <p style={{color: "red", cursor:"pointer"}} onClick={this.props.deleteTask}>Delete</p>
        </div>);
    }
}

export default NewTask;
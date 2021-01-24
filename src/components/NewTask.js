import React from "react";

class NewTask extends React.Component{
    render(){
        return(
        <div>
            <h5>{this.props.task.title}</h5>
            <p>{this.props.task.body}</p>
            <button onClick={this.props.deleteTask}>Delete</button>
        </div>);
    }
}

export default NewTask;
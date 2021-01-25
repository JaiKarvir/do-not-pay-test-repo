import React from 'react';

class TaskName extends React.Component{
    render(){
        return(
            <div draggable="true" id={[this.props.task.id]} onDragStart={this.props.onDragStart}>
                <h3>{this.props.task.title}</h3>
                <p>{this.props.task.body}</p>
                <p style={{color: "red", cursor:"pointer"}} onClick={()=>this.props.deleteTask(this.props.task.id)}> Delete </p>
            </div>
        );
    }
}

export default TaskName;
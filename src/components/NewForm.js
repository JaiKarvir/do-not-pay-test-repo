import React from 'react';

class NewForm extends React.Component{
   /* constructor(props){
        super(props);
        
    }*/
    render(){
        return(
        <form>
            <div>
             <input type="text"  value = {this.props.addTaskFormProp.title} onChange={(event)=>this.props.handleTitleChange(event)}/>
           </div>
           <div>
             <input type="text" value = {this.props.addTaskFormProp.body} onChange={(event)=>this.props.handleBodyChange(event)}/>
           </div>
           <button onClick={this.props.handleAddTask}>Add</button>
        </form>
        )
    }
}

export default NewForm;
const AddTaskForm = (props) => {
    return(
    <div>
        <form>
           <div>
             <input type="text"  value = {props.addTaskFormProp.title} onChange={(event)=>props.handleTitleChange(event)}/>
           </div>
           <div>
             <input type="text" value = {props.addTaskFormProp.body} onChange={(event)=>props.handleBodyChange(event)}/>
           </div>
           <button>Add</button>
        </form>
    </div>)
}

export default AddTaskForm;
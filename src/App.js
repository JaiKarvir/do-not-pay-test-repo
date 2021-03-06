import './App.css';
import React from "react";
import List from './components/List'

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.state ={
      dragInfo: null,
      lists: [
      {
         TaskName: 'Pending',
         id: 0,
         tasks:[
           {title:'Title1', body: 'Pending Task1', id:0},
           {title:'Title2', body: 'Pending Task2',id:1},
         ]
      },
      {
        TaskName: 'In Progress',
        id: 1,
        tasks:[
          {title:'Title1', body: 'InProgress Task1', id:0},
          {title:'Title2', body: 'InProgress Task2', id:1},
        ]
     },
     {
      TaskName: 'Completed',
      id: 2,
      tasks:[
        {title:'Title1', body: 'Completed Task1', id:0},
        {title:'Title2', body: 'Completed Task2', id:1},
      ]
    }
    ]
  }
  }

  onDragStart = (e, fromList) => {
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }
    this.setState({dragInfo: dragInfo});
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, listNum) => { 
    const droppedTask = this.state.dragInfo;
    const listsInfo = [...this.state.lists];
    const cardsArray = listsInfo[droppedTask.fromList].tasks;
    
    const taskCardIndex = cardsArray.findIndex(card => card.id ==  droppedTask.taskId );
    const taskCard = cardsArray.find(card => card.id ==  droppedTask.taskId );
    listsInfo[droppedTask.fromList].tasks.splice(taskCardIndex,1);
    listsInfo[listNum].tasks.push({...taskCard});
    
    this.setState({
      lists: listsInfo
    })
    
  }

  handleAddTask =(newTask) =>{
    let listInfo = [...this.state.lists];
    const taskCard = listInfo.find(card => card.TaskName ==  newTask.taskName);
    const len = taskCard.tasks.length
    const createNewTask = {
       title: newTask.title,
       body: newTask.body,
       id: len
    }
    listInfo[taskCard.id].tasks.push({...createNewTask});
    this.setState({
      lists: listInfo
    })
  }

  handleDeleteTask = (index,id) =>{
    let listInfo = [...this.state.lists];
    let tasklist = listInfo[index].tasks;
    tasklist.splice(id,1);
        this.setState({
            tasks: tasklist
          });
  }

  render(){
    const lists = this.state.lists.map((list,index) =>{
      return(
        <div key={index} className="task">
          <List list = {list} 
                onDragStart={(e, fromList) => this.onDragStart(e, `${list.id}`)}
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e, listNum) => {this.onDrop(e, `${list.id}`)}}
                addTask = {(newTask)=>this.handleAddTask(newTask)}
                deleteTask = {(id)=>this.handleDeleteTask(index,id)}
          />
        </div>
      )
    }
    )
    return (
      <div  className="component-app">
        {lists}
      </div> 
    );
  }
}

export default App;

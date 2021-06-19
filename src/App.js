import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appt',
        day: 'feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Shopping',
        day: 'Feb 6th at 1:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'meeting at school',
        day: 'Feb 4th at 3pm',
        reminder: true,
    }
])

//delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder}: task))
}

  return (
    <div className='container'>
      <Header/>
      <AddTask/>
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
      : ( 'No Tasks to Show')}
    </div>
  );
}


export default App;

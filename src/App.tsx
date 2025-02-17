import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks, { ITask } from './components/Tasks'
import { v4 } from 'uuid'
import Title from './components/Title'

function App() {
  const [tasks, setTasks] = useState<ITask[]>(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    if (tasks.length === 0) {
      async function fetchTasks() {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5',
          { method: 'GET' }
        )
        const data = await response.json()

        setTasks(data)
      }
      fetchTasks()
    }
  }, [])

  function onTaskClick(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }

      return task
    })

    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title: string, description: string) {
    const newTask = {
      id: v4(),
      title,
      description,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-125 space-y-4'>
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App

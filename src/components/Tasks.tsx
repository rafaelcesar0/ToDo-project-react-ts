import {
  CheckIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  TrashIcon,
} from 'lucide-react'
import { useNavigate } from 'react-router'
import Button from './Button'

export interface ITask {
  id: string
  title: string
  description: string
  completed: boolean
}

interface ITasksProps {
  tasks: ITask[]
  onTaskClick: (taskId: string) => void
  onDeleteTaskClick: (taskId: string) => void
}

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }: ITasksProps) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task: ITask) {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className='flex gap-2 items-center'>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`flex-1 bg-slate-400 text-left text-white p-2 rounded-md flex items-center gap-2 ${
                task.completed && 'line-through'
              }`}
            >
              {task.completed && <CheckIcon />}
              <span className='truncate min-w-0 max-w-85'>{task.title}</span>
            </button>
            <Button onClick={() => onSeeDetailsClick(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <TrashIcon />
            </Button>
          </li>
        ))
      ) : (
        <li className='bg-yellow-500 text-left w-full text-white font-bold p-4 rounded-md flex justify-center'>
          <CircleAlertIcon />
          <p>&nbsp;Sem tarefas</p>
        </li>
      )}
    </ul>
  )
}

export default Tasks

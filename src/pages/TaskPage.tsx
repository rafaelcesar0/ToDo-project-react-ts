import { ChevronLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router'
import Title from '../components/Title'

function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className='h-screen w-screen bg-slate-500 p-6'>
      <div className='w-125 space-y-4 mx-auto'>
        <div className='flex justify-center relative'>
          <button
            onClick={() => navigate(-1)}
            className='absolute left-0 top-0 bottom-0 text-slate-100'
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefas</Title>
        </div>
        <div className='bg-slate-400 p-4 rounded-md'>
          <h2 className='text-xl text-white font-bold'>{title}</h2>
          <p className='text-white'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage

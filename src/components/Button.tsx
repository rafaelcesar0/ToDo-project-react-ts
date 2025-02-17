import { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick: () => void
}

function Button({ children, onClick }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className='bg-slate-400 text-white p-2 rounded-md'
    >
      {children}
    </button>
  )
}

export default Button

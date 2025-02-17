import { ReactNode } from 'react'

interface ITitleProps {
  children: ReactNode
}

function Title({ children }: ITitleProps) {
  return (
    <h1 className='text-3xl text-slate-100 font-bold text-center'>
      {children}
    </h1>
  )
}

export default Title

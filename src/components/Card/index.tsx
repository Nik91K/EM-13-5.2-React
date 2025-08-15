import type React from 'react';
import './style.css'

type CardProps = {
  title: string
  buttonText: string
  children: React.ReactNode
}

const Card = ({ title, buttonText, children }: CardProps) => {
  return (
    <div className='card'>
      <div className="content">
        <div className='title'>
          <p>{title}</p>
        </div>
        <div className='price'>
          {children}
        </div>
      </div>
      <button>
        {buttonText}
      </button>
    </div>
  )
}

export default Card
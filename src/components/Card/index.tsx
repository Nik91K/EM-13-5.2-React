import type React from 'react';
import './style.css'

type CardProps = {
  title: string
  buttonText: string
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className='card'>
      <div className="content">
        <div className='title'>
          <p>{props.title}</p>
        </div>
        <div className='price'>
          {props.children}
        </div>
      </div>
      <button>
        {props.buttonText}
      </button>
    </div>
  )
}

export default Card
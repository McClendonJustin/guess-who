import React from 'react'
import BoardArea from './BoardArea'
import Playerone from './Playerone'
import Playertwo from './Playertwo'

const Board = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <Playerone />
        <div className='w-3/5'><BoardArea /></div>
        <Playertwo />
      </div>
    </div>
  )
}

export default Board
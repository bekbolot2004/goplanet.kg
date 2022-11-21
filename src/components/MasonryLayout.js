import React from 'react'
import bg from './GetSection/assets/Handshake.jpeg'

const MasonryLayout = () => {
  return (
    <div className='column-4 gap-3 w-[1200px] mx-auto font-bold text-gray-500 pt-8 pb-28'>
        <div className='bg-gray-200 break-inside-avoid'><img src={bg} alt='pg' /></div>
    </div>
  )
}

export default MasonryLayout
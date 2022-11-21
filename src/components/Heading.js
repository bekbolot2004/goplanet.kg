import React from 'react'

const Heading = ({children}) => {
  return (
    <div>
        <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl text-[#393939] '>{children}</h1>
        <div className='bg-[#393939] h-[6px] w-28 rounded-full mt-2' />
    </div>
  )
}

export default Heading
import React from 'react'
import imgBlog from '../assets/germany.png'
import Heading from './Heading'


const Blog = ({title, text, img, right}) => {
  return (
    <div className='mx-auto max-w-7xl px-4 my-14'>
        <Heading>{title}</Heading>
        <div className='flex flex-row flex-wrap-reverse mt-3  sm:mt-14 gap-8 lg:flex-row lg:flex-nowrap'>
            <p className='lg:w-1/2 text-xl leading-8'>{text}</p>
            <div className='lg:w-1/2 overflow-hidden rounded-xl'><img src={img} alt='blogphoto' className='rounded-xl drop-shadow-lg' /></div>
        </div>
    </div>
  )
}

export default Blog
import React from 'react'
import {motion} from 'framer-motion'

export default function FirstBlock({title,subtitle,lists,bg}) {
  return (
    <div className="flex flex-col items-center h-[calc(100vh)] bg-top  bg-cover" style={{backgroundImage: `url(${bg})`}}>
        <div className="absolute h-full w-full" style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), radial-gradient(80.56% 80.56% at 50% 19.44%, rgba(0, 0, 0, 0) 59.36%, rgba(0, 0, 0, 0.7) 99.23%)"}}/>
        <div className='flex flex-col w-full h-screen justify-end  pt-[calc(13vh+20px)] pb-[50px] mx-auto max-w-7xl px-4 z-10'>
          <h1 className='font text-4xl font-bold tracking-tight text-white sm:text-6xl'>{title}</h1>
          <h3 className='text-1xl font-normal text-white md:text-2xl max-w-[700px]'>{subtitle}</h3>
          <div className='pt-[10px] md:space-x-10  lg:flex items-center'>
            <motion.a href='https://wa.me/996707998202?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D1%83%D0%B9%D1%82%D0%B5'
            whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}> 
              <div className='rounded-sm drop-shadow-lg text-center text-lg text-white tracking-wider font-medium uppercase flex justify-evenly items-center bg-[#F8981D] text-[24px]  w-full  sm:w-[300px] h-[40px]'>Связаться с нами</div>
              </motion.a>
            <div className='pt-[10px] list-disc lg:list-none lg:flex items-start'>
              {lists && lists.map((item) => <li key={item} className={`text-white font-normal sm:max-w-[190px] relative`}>{item} <div className='absolute top-[6px] right-[102%] h-5 w-1 bg-[#F8981D]' /> </li>)}
            </div>
          </div>
        </div>
        
    </div>
 ) 
}
import React from 'react'

const StatisticsSection = () => {

    const staticObj = [
        {
            id:1,
            title: '5',
            text: 'лет опыта реального проекта'
        },
        {
            id:2,
            title: '800+',
            text: 'Визы оформляем'
        },
        {
            id:3,
            title: '93%',
            text: 'Одобрений визы'
        },
    ]

  return (
    <div className='mx-auto max-w-7xl px-4 my-12 md:my-[0]'>
        <div className='flex flex-col md:justify-evenly md:flex-row gap-6'>
            {staticObj && staticObj.map((item) =>
            <div className='flex flex-col items-center text-[#272765]'>
                <h1 className='text-6xl font-extrabold'>{item.title}</h1>
                <di className='h-[2px] w-[120px] bg-black mt-3'/>
                <p className='mt-3'>{item.text}</p>
            </div>
            ) }
        </div>
    </div>
  )
}

export default StatisticsSection
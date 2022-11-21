import React from 'react'
import Heading from '../Heading'
import photo1 from './assets/photo1.png'
import photo2 from './assets/photo2.png'
import people1 from './assets/people1.png'
import people2 from './assets/people2.jpg'
import people3 from './assets/people3.jpg'
import photo3 from './assets/1.jpg'
import photo4 from './assets/2.jpg'
import photo5 from './assets/3.jpg'
import photo6 from './assets/4.jpg'
import photo7 from './assets/5.jpg'
import photo8 from './assets/6.jpg'
import photo9 from './assets/7.jpg'
import photo10 from './assets/8.jpg'

const Team = () => {


    const teamObj = [
        {
            id:1,
            name: 'Сүймөнкул Идирисов Дайыркулович',
            title: 'Сооснователь компании "Go planet", Генеральный директор',
            img: people1
        },
        {
            id:2,
            name: 'Чокоева Бегайым Израиловна',
            title: 'Сооснователь компании "Go planet", Директор',
            img: people2
        },
        {
            id:3,
            name: 'Нурлан кызы Наргиза',
            title: 'Главный менеджер',
            img: people3
        },
    ]

  return (
    <div className='mx-auto max-w-7xl px-4 my-14'>
        <Heading>Наша команда</Heading>
        <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 mt-10'>
            <div className='bg-black rounded-xl w-full h-[500px] bg-cover bg-center' style={{backgroundImage: `url(${photo1})`}}>

            </div>
            <div className='grid gap-[30px] grid-cols-2 w-full h-[500px]'>
                {[photo2,photo4,photo5,photo6].map((item) =>
                <div className='bg-black rounded-xl bg-cover bg-center' style={{backgroundImage: `url(${item})`}}>

                </div>
                )}
            </div>
        </div>
        <div className='grid gap-[30px] grid-cols-4 w-full h-[500px] mt-8'>
                {[photo7,photo8,photo9,photo10].map((item) =>
                <div className='bg-black rounded-xl bg-cover bg-center' style={{backgroundImage: `url(${item})`}}>

                </div>
                )}
            </div>
        <div className='mt-[100px] grid gap-[30px] grid-cols-4'>
            {teamObj.map((item) =>
                <div className='w-[300px] h-[430px] overflow-hidden rounded-xl bg-black bg-cover bg-center relative drop-shadow-lg' style={{backgroundImage: `url(${item.img})`}}>
                    <div className='absolute left-0 top-0 h-[100px] w-full bg-white flex justify-center items-center flex-col text-center' style={{clipPath: 'polygon(0.00% 0.00%,100.00% 0.00%,100.00% 100%,0.00% 79.62%)'}}>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <p className='text-sm text-black/50'>{item.title}</p>
                    </div>
                </div>
            )}
            <div className='flex items-center col-span-2'>
                <p className='max-w-[600px]  text-center text-xl font-medium text-black/60'>Goplanet - это туристическая компания нового поколения. Мы используем все доступные сегодня технологии, чтобы сделать выбор, оплату и бронирование Вашего путешествия максимально удобными и приятными.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Team
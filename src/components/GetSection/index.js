import React from 'react'
import Heading from '../Heading'
import handShake from './assets/Handshake.jpeg'

const GetSection = () => {


    const servicesObj = [
        {
            id:1,
            title: 'Консультация и помощь в сложных визовых вопросах и отказов',
            text: 'Поможем советами и делом в самых непростых ситцуациях',
            img: handShake
        },
        {
            id:2,
            title: 'Консультация и помощь в сложных визовых вопросах и отказов',
            text: 'Поможем советами и делом в самых непростых ситцуациях',
            img: handShake
        },

        {
            id:3,
            title: 'Консультация и помощь в сложных визовых вопросах и отказов',
            text: 'Поможем советами и делом в самых непростых ситцуациях',
            img: handShake
        },
        {
            id:4,
            title: 'Консультация и помощь в сложных визовых вопросах и отказов',
            text: 'Поможем советами и делом в самых непростых ситцуациях',
            img: handShake
        },
        {
            id:5,
            title: 'Консультация и помощь в сложных визовых вопросах и отказов',
            text: 'Поможем советами и делом в самых непростых ситцуациях',
            img: handShake
        },
        {
            id:6,
            title: 'Консультация и помощь в сложных визовых вопросах и отказов',
            text: 'Поможем советами и делом в самых непростых ситцуациях',
            img: handShake
        },
    ]

  return (
    <div className='mx-auto max-w-7xl px-4 my-14'>
        <Heading>Обративишсь к нам вы получайте полный спектор услуг</Heading>
        <div className='grid grid-cols-3 gap-4 my-12'>
            {servicesObj && servicesObj.map((item) =>
            <div className=''>
             <h3 className='text-xl font-medium'>{item.title}</h3>
             <div className='w-full h-[200px] rounded-xl flex items-end p-4 mt-3 bg-cover bg-center' style={{backgroundImage: `url(${item.img})`}}>
                <p className='text-white'>{item.text}</p>
                {/* < */}
             </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default GetSection
import React from 'react'
import Heading from '../Heading'

const Profitable = () => {

    const studyObj = [
        {
            id:1,
            title: "Отличный сервис",
            text: "Мы мотивируем наших сотрудников на эффективное решение задач, ориентируясь на потребности клиента."
        },
        {
            id:2,
            title: "Низкие цены",
            text: "Отлаженные бизнес-процессы и высокая общая скорость работы позволяют нам держать цены на уровне, доступном каждому."
        },
        {
            id:3,
            title: "Отсутствие посредников",
            text: "У нас уже есть устоявшиеся налаженные связи со многими дипломатическими посольствами и консульствами."
        },
        {
            id:4,
            title: "Решение сложных задач",
            text: "Мы готовы помочь, даже если вам уже отказывали в получении визы или необходимо срочное оформление в сжатые сроки."
        },
        {
            id:5,
            title: "Автоматизировать работу с ассортиментом",
            text: "Познакомитесь с товарным учётом, планированием, отслеживанием товарных остатков и научитесь управлять поставками: формировать заказ, отгрузку, работать с возвратами"
        },
        {
            id:6,
            title: "Высокая репутация",
            text: "Отсутствие посредников"
        },
    ]

  return (
    <div className='container mx-auto p-4'>
        <Heading>С нами выгодно и надежно</Heading>
        <div className='grid grid-cols-3 gap-4 my-8 mt-10'>
            {studyObj && studyObj.map((item) =>
            <div className="flex">
                <div className='text-xl font-medium mr-10'><p className='bg-purple-900 text-white flex justify-center items-center h-10 w-10 rounded-full'>{item.id}</p></div>
                <div>
                    <h3 className='text-xl font-medium'>{item.title}</h3>
                    <p className='text-base font text-black/70 mt-6'>{item.text}</p>
                </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default Profitable
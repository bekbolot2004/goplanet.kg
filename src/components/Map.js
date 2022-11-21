import React from 'react'

const Map = () => {
  return (
    <div className='relative w-full h-screen'>
        <iframe className='w-full h-full z-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.1773276095546!2d74.58267068576492!3d42.87061755645043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec944fa918ead%3A0x49ff0c1c322b56c6!2sGo%20Planet!5e0!3m2!1sru!2skg!4v1665921418365!5m2!1sru!2skg"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        <div className='absolute top-[10px] left-[10px] z-20 bg-[#272765] py-[40px] px-[50px] shadow-sm text-center text-white/80'>
            <h2 className='text-4xl font-semibold text-white'>Офис в Бишкеке</h2>
            <p className='text-orange-500 font-medium mt-3'>goplanetcompany@gmail.com</p>
            <p className='mt-1 text-lg'>+996 (550) 52-67-51 - Бегайым Чокоева</p>
            <p className='text-lg'>+996 (707) 99-82-02 - Идирисов Суймонкул</p>
            <p className='font-light mt-2'>Бишкек, Московская 193/Турусбекова</p>
            <p className='mt-2'>Мы работаем: <br/>
            ПН-ПТ с 9:00 - 18:00</p>
            <p>Для вашего комфорта мы работаем по предтварительной записи</p>
        </div>
    </div>
  )
}

export default Map
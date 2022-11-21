import React from 'react'
import Heading from '../Heading'
import de from './assets/de.svg'
import lt from './assets/lt.svg'
import lv from './assets/lv.svg'
import pl from './assets/pl.svg'
import us from './assets/us.svg'
import ae from './assets/ae.svg'
import ch from './assets/ch.svg'
import ee from './assets/ee.svg'
import hu from './assets/hu.svg'

const Countries = () => {

    const countriesObj = [
        {id:1,
        title: 'Швецария',
        img: ch,
        },
        {id:2,
        title: 'Польша',
        img: pl,
        },
        {id:3,
        title: 'Германия',
        img: de,
        },
        {id:4,
        title: 'Латвия',
        img: lv,
        },
        {id:5,
        title: 'Литва',
        img: lt,
        },
        {id:6,
        title: 'ОАЕ',
        img: ae,
        },
        {id:7,
        title: 'Эстония',
        img: ee,
        },
        {id:8,
        title: 'Венгрия',
        img: hu,
        },
    ]

  return (
    <div className='mx-auto max-w-7xl px-4 my-14'>
        <Heading>Страны для оформление визы</Heading>
        <div className='grid gap-[30px] grid-cols-1 md:grid-cols-3  lg:grid-cols-5 mt-[80px]'>
            {countriesObj && countriesObj.map((item) => 
            <div className='w-[200px]'>
                <img className='w-full bg-cover bg-center rounded-2xl border-[5px] border-black shadow-2xl' src={item.img}/>
                <h3 className='text-2xl font-semibold mt-3'>{item.title}</h3>
            </div>
            )}
        </div>
    </div>
  )
}

export default Countries
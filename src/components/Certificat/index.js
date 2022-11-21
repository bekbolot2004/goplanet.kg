import React from 'react'
import Heading from '../Heading'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import photo from './assets/Photo.jpeg'
import photo2 from './assets/photo2.jpeg'

const Certificat = () => {


    const img = [
       {
        id: 1,
        image: photo
       },
       {
        id: 2,
        image: photo2
       },
    ]

    const images = img.map((number) => ({
        src: number.image
      }));
    
  return (
    <div className='mx-auto max-w-7xl px-4 my-14'>
        <Heading>Лицензия на трудоустройства зарубеж №000795</Heading>
        <div className='mt-10'>
            <div className='flex justify-center'>
                <Carousel images={images} style={{ height: 500, width: 300 }} />
            </div>
        </div>
    </div>
  )
}

export default Certificat
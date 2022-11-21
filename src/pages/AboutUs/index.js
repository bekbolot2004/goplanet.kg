import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import Map from '../../components/Map'
import Team from '../../components/Team'
import bg from './bg.png'

const AboutUs = () => {
  return (
    <MainLayout>
        <FirstBlock title={"О нас"} subtitle={"Наша миссия - Заботясь о клиенте, мы вместе оказываем лучший визовый сервис, делая его простым и удобным, открывая любые границы."} lists={["Более 93% одобрения на получение визы", "Более 3000 клиентов получили визу", "Работаем уже 5 лет"]} bg={bg}/>
        <Team/>
        <Map/>
    </MainLayout>
  )
}

export default AboutUs
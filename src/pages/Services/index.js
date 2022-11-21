import React from 'react'
import FirstBlock from '../../components/FirstBlock'
import MainLayout from '../../components/MainLayout'
import bg from './bg.png'

const Services = () => {
  return (
    <MainLayout>
        <FirstBlock title={"Наши другие услуги"} subtitle={"Письменные переводы со всех языков. Содействие при проставлении печати - Апостиль и Легализация. Нотариальное заверение всех документов."} lists={["Более 93% одобрения на получение визы", "Более 3000 клиентов получили визу", "Работаем уже 5 лет"]} bg={bg}/>
    </MainLayout>
  )
}

export default Services
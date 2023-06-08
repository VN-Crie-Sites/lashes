import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from '../../public/img/whats.jpg'

export function WhatsApp() {
  const dateNow = new Date()
  const hours = dateNow.getHours()

  const messageStatus = []

  if (hours < 18 && hours > 9) {
    messageStatus.push(
      'Online',
      `Ola, seja bem vindo!!! \nSomos a Carine Lashes. \n\nComo podemos te ajudar?`,
    )
  } else {
    messageStatus.push(
      'Offline',
      `Ola, seja bem vindo!!! \nSomos a Carine Lashes. \n\nNo momento estamos disponiveis. Fique atento ao nosso horário de funcionamento: \n\nSeg à Sex: 09:00h às 18:00h \nSáb e Dom: Estamos fechados!`,
    )
  }

  return (
    <FloatingWhatsApp
      phoneNumber="12981569866"
      accountName="Carine Lashes"
      chatMessage={messageStatus[1]}
      darkMode
      placeholder="Escreva uma mensagem ..."
      allowClickAway
      allowEsc
      avatar={avatar}
      statusMessage={messageStatus[0]}
      chatboxHeight={450}
    />
  )
}

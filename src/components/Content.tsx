import { MapPinLine, WhatsappLogo } from 'phosphor-react'
import { cardsContentPlace, cardsContentService } from '../assets/cardsContent'
import { Megavolume } from '../modalContent/Megavolume'
import { Hibrido } from '../modalContent/Hibrido'
import { Curso } from '../modalContent/Curso'
import { Brasileiro } from '../modalContent/Brasileiro'
import { Fioafio } from '../modalContent/Fioafio'
import { Russo } from '../modalContent/Russo'
import { ButtonModal } from './ButtonModal'
import { Card } from './Card'
import { CardPlace } from './CardPlace'
import { Center } from './Center'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

interface FormProps {
  name: string
  email: string
  subject: string
  message: string
}

export function Content() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      message: '',
      name: '',
      subject: '',
    },
  })

  return (
    <main className="">
      <div id="services" className="min-h-screen flex py-20">
        <Center>
          <h1 className="font-bold text-4xl text-center leading-tight md:flex md:flex-col">
            Nossos Serviços {' '}
          </h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 justify-self-auto grid-cols-1 gap-4">
            {cardsContentService.map((card) => {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  about={card.about}
                  image={card.imageSource}
                >
                  <ButtonModal
                    title={card.title}
                    button={'Realizar um agendamento'}
                  >
                    {card.id === 0 ? (
                      <Megavolume />
                    ) : card.id === 1 ? (
                      <Brasileiro />
                    ) : card.id === 2 ? (
                      <Russo />
                    ) : card.id === 3 ? (
                      <Fioafio />
                    ) : card.id === 4 ? (
                      <Hibrido />
                    ) : (
                      <Curso />
                    )}
                  </ButtonModal>
                </Card>
              )
            })}
          </div>
        </Center>
      </div>
      <div className="min-h-[40vh] flex ">
        <Center>
          <div className="w-full grid md:grid-cols-5 lg:grid-cols-5 grid-cols-1 gap-8 pb-20">
            {cardsContentPlace.map((card, i) => {
              return (
                <>
                  <CardPlace
                    key={card.id}
                    title={card.title}
                    image={card.imageSource}
                  />
                </>
              )
            })}
          </div>
        </Center>
      </div>
      <div className="min-h-[60vh] flex bg-black/10">
        <Center>
          <div className="flex gap-1 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <h1 className="font-bold md:text-6xl text-4xl text-center leading-tight self-center">
                Quem somos?
              </h1>
              <div className="flex flex-col gap-4 text-justify">
                <p>
                  A <span className="font-semibold">Carine Lashes</span>, é uma profissional altamente 
                  qualificada e apaixonada pelo seu trabalho. Com habilidades excepcionais e um olhar 
                  atento aos detalhes, ela está pronta para transformar seus cílios em verdadeiras obras de arte. 
                  Seja para uma ocasião especial, como um casamento ou evento importante, ou para um look diário 
                  que te faça sentir confiante e radiante, nossa Lash Designer irá superar suas expectativas.
                </p>
                <p>
                  Com um profundo conhecimento das técnicas mais avançadas de design de cílios, nossa especialista 
                  irá personalizar o tratamento de acordo com suas necessidades e preferências individuais. Ela avaliará 
                  cuidadosamente a forma dos seus olhos, a curvatura natural dos seus cílios e seu estilo pessoal para criar 
                  um resultado perfeito e harmonioso.
                </p>
                <h2 className="font-semibold text-lg">
                  Onde Estamos Localizados?
                </h2>
                <div className="flex items-center gap-4">
                  <MapPinLine size={32} />
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.google.com/maps/place/Av.+Jos%C3%A9+Benedito+de+Faria,+1038+-+Rio+do+Ouro,+Caraguatatuba+-+SP,+11675-030/@-23.6171632,-45.4339283,17z/data=!3m1!4b1!4m10!1m2!2m1!1sAv:+Jos%C3%A9+Benedito+de+Faria,+1038+-+Ponte+Seca%0D%0A.Caraguatatuba,+SP!3m6!1s0x94cd6360ee36a3e7:0xd768c6a4e6fa1dfa!8m2!3d-23.6171633!4d-45.4293149!15sCkJBdjogSm9zw6kgQmVuZWRpdG8gZGUgRmFyaWEsIDEwMzggLSBQb250ZSBTZWNhDQouQ2FyYWd1YXRhdHViYSwgU1CSARBnZW9jb2RlZF9hZGRyZXNz4AEA!16s%2Fg%2F11jh_jc1br?entry=ttu"
                    rel="noreferrer"
                  >
                    Av. José Benedito de Faria, 1038 - Ponte Seca, Caraguatatuba - SP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Center>
      </div>
    </main>
  )
}

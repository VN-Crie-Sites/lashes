import {
  FacebookLogo,
  InstagramLogo,
  MapPinLine,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import { Center } from "./Center";

export function Footer() {
  return (
    <>
      <div className="flex bg-zinc-800 py-20 text-zinc-400 px-4">
        <Center>
          <div className="w-full flex items-center justify-center min-h-[30vh]">
            <div className="w-full grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 items-stretch justify-between md:gap-4 gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-left">
                  Descubra o poder de um olhar transformado e desperte a confiança 
                  interior através do design de cílios. Torne-se um especialista em 
                  realçar a beleza dos olhos e deixe sua marca no mundo da beleza.
                </p>
                <span className="flex gap-4">
                  <FacebookLogo size={28} />
                  <InstagramLogo size={28} />
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-white text-xl">
                  Informações
                </h2>
                <div className="flex flex-col gap-2 underline">
                  <a
                    href="https://www.google.com.br/maps/place/R.+Dr.+Prudente+de+Morais+-+Po%C3%A1,+SP,+08551-230/@-23.5246059,-46.3518703,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7b277272163b:0x3396f332acac63a2!8m2!3d-23.5246108!4d-46.3496816!16s%2Fg%2F1ymvrgrs0"
                    className="flex items-start gap-2"
                    target="_blank"
                  >
                    <MapPinLine size={22} />
                    Av: José Benedito de Faria, 1038 - Ponte Seca.Caraguatatuba, SP
                  </a>
                  <a href="#" className="flex items-start gap-2">
                    <Phone size={22} />
                    Tel: +55 (11) 96987-1384
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-white text-xl">Serviços</h2>
                <div className="flex flex-col gap-2 underline">
                  <a href="#services">Mega Volume</a>
                  <a href="#services">Volume Brasileiro</a>
                  <a href="#services">Volume Russo</a>
                  <a href="#services">Fio a Fio</a>
                  <a href="#services">Híbrido</a>
                  <a href="#services">Curso Completo</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-white text-xl">
                  Redes sociais
                </h2>
                <div className="flex flex-col gap-2 underline">
                  <p className="flex gap-2 items-center">
                    <span>
                      <InstagramLogo size={20} />
                    </span>
                    @Instagram
                  </p>
                  <p className="flex gap-2 items-center">
                    <span>
                      <FacebookLogo size={20} />
                    </span>
                    @Facebook
                  </p>
                  <a
                    className="flex gap-2 items-center"
                    href="https://api.whatsapp.com/send/?phone=12981569866&text=Ola,%20gostaria%20de%20estar%20realizando%20um%20or%C3%A7amento!"
                    target="_blank"
                  >
                    <span>
                      <WhatsappLogo size={20} />
                    </span>
                    @WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Center>
      </div>
      <footer className="flex justify-start bg-zinc-900 px-4">
        <Center>
          <div className="h-[8vh] w-full flex items-center text-zinc-400 text-sm md:text-base">
            Carine Lashes &copy; 2023
          </div>
        </Center>
      </footer>
    </>
  );
}

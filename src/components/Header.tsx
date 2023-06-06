import { Center } from "./Center";
import Wallpaper from "../../public/img/wallpaper.jpeg";

export function Header() {
  return (
    <header className="h-[80vh] bg-zinc-800 flex items-center justify-center relative">
      <div className="absolute top-0 h-[80vh] left-0 right-0 flex items-center justify-center">
        <img src={Wallpaper} alt="" className="w-full h-full" />
      </div>
      <div className=" absolute top-0 h-[80vh] left-0 right-0 flex items-center justify-center bg-black/60 z-10">
        <Center>
          <div className="w-full h-[80vh] flex items-center justify-center md:justify-start text-white">
            <div className="w-[80%] md:w-[60%] text-center md:text-left font-semibold flex flex-col gap-4">
              <h1 className="text-4xl lg:text-5xl text-orange">
                
              </h1>
              <p className="text-2xl lg:text-3xl">
                Sua autoestima no olhar!
              </p>

              <span className="mt-4 font-normal text-md md:text-lg underline text-white">
                <a href="#services">
                  Clique aqui e saiba mais sobre nossos serviços
                </a>
              </span>
            </div>
          </div>
        </Center>
      </div>
      <div className="bg-black left-0 right-0 top-0 absolute py-4 flex justify-start items-center text-white z-20">
        <Center>
          <div className="w-full px-4 flex justify-between items-center">
            <div className="font-bold text-xl">Carine Lashes</div>
            <a href="#orcamento">
              <div className="bg-red hover:bg-red-800 transition-all rounded p-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=12982979129&text=Ola,%20gostaria%20de%20realizar%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                Fale conosco
              </div>
            </a>
          </div>
        </Center>
      </div>
    </header>
  );
}

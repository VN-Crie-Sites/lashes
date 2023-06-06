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
            <div className="w-[80%] md:w-[60%] text-center md:text-left font-semibold flex flex-col gap-4bg-[#b82a7c]">
              <p className="text-2xl lg:text-3xl">
                Sua autoestima no olhar!
              </p>

              <h2 className="w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque voluptatem unde cum doloremque nesciunt debitis architecto</h2>
            </div>
          </div>
        </Center>
      </div>
      <div className="bg-zinc-800/80 fixed left-0 right-0 top-0 py-4 flex justify-start items-center text-white z-20">
        <Center>
          <div className="w-full px-4 flex justify-between items-center">
            <div className="font-bold text-xl">Carine Lashes</div>
            <a href="https://wa.me/message/MAKE2PBGOEQ5K1" target="_blank"
                  rel="noopener noreferrer">
              <div className="bg-[#b82a7c] hover:bg-[#a42b71] transition-all rounded p-2">
                Fale conosco
              </div>
            </a>
          </div>
        </Center>
      </div>
    </header>
  );
}

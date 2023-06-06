import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

interface Props {
  title?: string
  children?: React.ReactNode
  button?: string
}

export function ButtonModal({ button, children, title }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-[#b82a7c] hover:bg-[#a42b71] transition-all w-max py-1 px-2 rounded text-white">
          Saiba mais
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className=" bg-white rounded-md fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow w-[95vw] lg:w-[100vw] max-w-[980px] max-h-[95vh] p-6">
          <div className="flex flex-row-reverse justify-between mb-4 items-start">
            <Dialog.Close asChild>
              <button
                className="rounded-full p-2 hover:border-gray-500 hover:bg-gray-200 transition-all"
                aria-label="Close"
              >
                <X size={18} weight="bold" />
              </button>
            </Dialog.Close>
            <Dialog.Title className="font-bold text-2xl">{title}</Dialog.Title>
          </div>
          <Dialog.Description className="flex flex-col gap-4 max-h-[65vh] overflow-y-auto pr-4 scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded">
            {children}
            <button className="mt-4 self-start bg-[#b82a7c] hover:bg-[#a42b71] transition-all rounded p-2 text-white">
              <a
                href="https://wa.me/message/MAKE2PBGOEQ5K1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {button}
              </a>
            </button>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

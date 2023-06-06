interface Props {
  children?: React.ReactNode
}

export function Center({ children }: Props) {
  return (
    <div className="w-[1280px] px-4 md:px-10 mx-auto flex flex-col gap-20 items-center justify-center">
      {children}
    </div>
  )
}

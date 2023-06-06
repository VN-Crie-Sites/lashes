interface CardProps {
  image?: string
  title: string
  link?: string
}

export function CardPlace({ title, image, link }: CardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[150px] cursor-pointer h-[150px] bg-slate-500 rounded-full transition-all overflow-hidden flex items-center justify-center">
        <img src={image} className="w-full h-full" />
      </div>
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </div>
  )
}

interface CardProps {
  image?: string
  title: string
  about: string
  link?: string
  children: React.ReactNode
}

export function Card({ image, title, about, link, children }: CardProps) {
  return (
    <div className="shadow-lg hover:shadow-2xl transition-all rounded-lg overflow-hidden">
      <div className="bg-slate-500 h-48 flex items-center justify-center">
        <img src={image} alt="default" className="w-full h-full" />
      </div>
      <div className="p-4 flex flex-col gap-4 min-h-[150px]">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{about}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

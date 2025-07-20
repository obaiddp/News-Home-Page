import React from 'react'

const BottomCard = ({ index, title, desc, image }) => {
  return (
    <div className='flex'>
      <img 
        src={image} 
        alt={title}
        className='
          w-24
          object-cover
          flex-shrink-0
        '
      />

      <div className='flex flex-col ml-4'>
        <h1 className='text-[#EB6250] text-3xl font-bold mb-2'>{index}</h1>
        <p className='text-[#00000E] text-lg font-bold mb-1'>{title}</p>
        <p className='text-[#8D8A91] text-sm leading-snug pr-20'>{desc}</p>
      </div>
    </div>
  )
}

export default BottomCard

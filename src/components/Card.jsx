import React from 'react'

const Card = (props) => {
  const url=`${props.thumbnail}.${props.format}`
  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/4 text-center hover:scale-110 text-red-600">
        <img src={url} alt="spiderman image" className='w-3/4 h-3/4 mx-auto my-2'></img>
        <p className="font-medium text-2xl">{props.name}</p>
    </div>
  )
}

export default Card
import React from 'react'
import RightCard from './RightCard'

const ImageContainer = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-5 p-4 w-3/4'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default ImageContainer
import React from 'react'

const Card = (props) => {
    // console.log(props)
  return (
    <div>
        
      <a href={props.elem.url} target='_blank'>
            <div className='h-70 w-70 rounded-2xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
            </div>
            <br />
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
          </a>
      
    </div>
  )
}

export default Card

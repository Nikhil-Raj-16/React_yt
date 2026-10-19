import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Page1Content = (props) => {
  return (
    <div className='px-5 h-[85vh] flex items-center gap-10'>
      <LeftText />
      <ImageContainer users={props.users}/>
    </div>
  )
}

export default Page1Content
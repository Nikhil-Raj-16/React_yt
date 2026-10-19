import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold'>{props.id + 1}</h2>
            <div>
                <p className='text-sm text-shadow-8xs leading-normal text-white mb-10 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic mollitia ullam consequuntur temporibus. Ratione.</p>
                <div>
                    <button style={{backgroundColor:props.color}} className='text-white font-semibold px-7 py-2 rounded-full text-sm'>{props.tag}</button>
                    <button><i className="ri-arrow-right-line text-white font-semibold px-3 py-3 rounded-full text-sm"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent

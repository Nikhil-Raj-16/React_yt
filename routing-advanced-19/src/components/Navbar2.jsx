import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar2 = () => {

    let navigate = useNavigate()

    // const btnClicked = () =>{
    //     // console.log('button is clicked');
    //     navigate('/')
    // }

  return (
    <div>
      <button onClick={() =>{
            navigate('/')
        }}
        className='text-white font-semibold bg-[#D1AC88] rounded px-3 py-2 m-5 cursor-pointer active:scale-95'>
            Return To Home Page
            </button>

        <button onClick={() => {
            navigate(-1)  // for going to previous page
        }}
        className='text-white font-semibold bg-[#D1AC88] rounded px-3 py-2 m-5 cursor-pointer active:scale-95'>
        Prev
        </button>
        <button onClick={() => {
            navigate(+1)  // for going to previous page
        }}
        className='text-white font-semibold bg-[#D1AC88] rounded px-3 py-2 m-5 cursor-pointer active:scale-95'>
        Next
        </button>
    </div>
  )
}

export default Navbar2

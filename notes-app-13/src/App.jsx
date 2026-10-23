import React, {useState} from 'react'
import {X} from 'lucide-react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
    // console.log(title, detail);
    const copyTask = [...task]      // copy banayi original ki,   previous saved again copied
    copyTask.push({title,detail})    // data push into copy,  then we push into previous saved
    setTask(copyTask)    // original is set to copy , then again original is replaced 
    
    // console.log(copyTask);
    // so this way we can store it in form of array
    
    setTitle('')
    setDetail('')
  }


  const deleteNote = (idx)=>{
    // console.log("note deleted");
    const copyTask = [...task]
    // console.log(copyTask[idx]);

    copyTask.splice(idx,1)
    setTask(copyTask)
    
    
  }

  return (
    <div className='h-screen bg-gray-800 lg:flex text-white'>
      {/* <img className='h-50 p-10' src="https://i.pinimg.com/736x/7b/65/ec/7b65ec9da53fa335cf998a71718fc682.jpg" alt="" /> */}

      <form onSubmit={(e) =>{
        submithandler(e)
      }} className='flex flex-col lg:w-1/2 gap-4 items-start p-10'>
        {/* <div className='flex items-start flex-col bg-gray-700 gap-3.5 w-1/2 justify-between p-10'> */}
          
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* Pehla input for heading */}
        <input type="text"
        className='px-5 py-2 w-full font-medium border-2 rounded outline-none' 
        placeholder='Enter Notes Heading'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)          
        }}/>

        {/* text area for detailed description */}
        <textarea type="text" 
        className='px-5 py-2 h-32 w-full font-medium border-2 rounded outline-none'
        placeholder='Write Details'
        value={detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}/>

        <button className='bg-white active:bg-gray-400 w-full font-medium outline-none text-black px-5 py-2 rounded'>Add Notes</button>
        {/* </div> */}
      </form>
      <div className='flex lg:w-1/2 lg:border-l-2 bg-gray-900 flex-col gap-3.5 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap content-start h-full overflow-auto gap-3.5 mt-5'>
          {task.map(function(elem,idx){
            // console.log(elem);
            if(elem.title && elem.detail)
            return <div key={idx} className="relative h-52 w-40 rounded-2xl text-black p-4 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxkdSdwD1WR8HfH783KjQnXEYggD_KFwW_f7ih9O46g&s=10')]"> 
            <b className='text-xl'>{elem.title}</b> <br /> 
            <button onClick={() => {
              deleteNote(idx)
              }
            } className='absolute bg-red-400 cursor-pointer active:scale-95 top-5 right-5 rounded-full p-1 text-xs'><X size={16} color="#ffffff" strokeWidth={3} /></button>
            <p className='leading-tight mt-2 text-xs text-gray-500 text-wrap'>{elem.detail}</p>
            </div>
          })}
        {/* <div className="card h-52 w-40 rounded-2xl bg-amber-200"></div> */}


        </div>
      </div>

    </div>
  )
}

export default App

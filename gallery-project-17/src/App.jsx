import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'

const App = () => {

  // axios.post mei backend se response aata hai like .post(url,data{username:'',password:''}) uske liye backend se response aayega like user logged in hai ya nahi but data bhi bhej skte hai, whereas axios.get mei kewal data aayega backend se

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [lim, setLim] = useState(8)


  async function getData(){
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${lim}`) 
    
    console.log(response.data);
    setUserData(response.data);
    
    // axios.post('https://picsum.photos/v2/list?page=2&limit=100', {username:'Nikhil',password:'Nikhilishere'})  
    // axios.patch is used to update data, like edit profile
    // axios.delete  is used to delete the account response comes as acc is deleted or not
    
  }

    useEffect(function(){
      getData()
      console.log('Data Fetched succesfull');
      
    },[index,lim])
    
    let printUserData =  <h2 className='text-gray-600 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading..</h2>
    
    if(userData.length > 0){
      printUserData = userData.map(function(elem,idx){
        
        return <div key={idx}>
          <Card elem={elem} />
        </div>
      })
    }
    return (
    <div className='bg-gray-800 text-amber-700 h-screen overflow-auto'>
      {/* <button onClick={getData} 
      className='bg-amber-950 p-3 border-amber-300 border-4 m-10 active:scale-95 rounded'>
        Get Data
        </button> */}

      

      <div className='flex flex-wrap h-[110%] gap-5 p-7'>
        {/* h-[110%] to fix the prev and next button */}
        {printUserData}
      </div>
      {/* so if i want data should come automatically we can use useEffect hook */}
      <div className='flex justify-center items-center p-4 gap-5'>
        <button 
        style={{opacity: index == 1 ? 0.5 : 1}}
        className='bg-amber-500 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          if(index > 1)
            setUserData([])
            setIndex(index-1)
        }}
        >Prev
        </button>
      <h1 className='font-bold top-4 right-4 px-4 py-1'>
        Page: {index}
      </h1>
        <button className='bg-amber-500 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          setUserData([])
          setIndex(index+1)
        }}
        >Next
        </button>
        {/* <button className='bg-amber-500 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={() => {
          setLim(lim+4)
        }}
        >+4 images
        </button> */}
        
      </div>
    </div>
  )
}

export default App

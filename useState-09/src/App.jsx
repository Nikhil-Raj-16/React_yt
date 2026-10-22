// import React from 'react'

// const App = () => {

//   let a = 20

//   function changeA(){
//     console.log(a);
//     a++;
//     console.log(a);
    
//   }

//   return (
//     <div>
//       <h1>The value of a is{a}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }

// export default App

// by the above we can see that we can't directly change the value of variable we , have to do it from the react help
// you -> website is not allowed we have to do like you -> react -> website  
// so we will use useState hook to change the variable value


// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(16)   // the bracket one is the value of num = 16 and setNum is used to change the value of num

//   const [user, setuser] = useState("Nikhil")
//   const [arrays, setarrays] = useState([10,20,30])

//   function changeNum(){
//     setnum(30)
//     setuser("Raj")
//     setarrays([40,50,60])
//   }

//   return (
//     <div>
//       <h1>Value of num is {num} <br /> {/*{arrays} <br />*/}
//       value of user is {user}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App


// Basic Counter
import React, { useState } from 'react'


const App = () => {

  const [num, setNum] = useState(0)   // get this from useState snippet

  function inc(){
    setNum(num+1)
  }
  function dec(){
    setNum(num-1)
  }
  function jumpby5(){
    setNum(num+5)
  }

  return (
    <div>
      <h1>The number is {num}</h1>
      <br />
      <button onClick={inc}>Increase</button>
      <br /> <br />
      <button onClick={dec}>Decrease</button>    
      <br /> <br />
      <button onClick={jumpby5}>Jump by 5</button>    
    </div>
  )
}

export default App



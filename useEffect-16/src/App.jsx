import React, { useEffect } from 'react'
import {useState} from 'react'

// const App = () => {

  // function random(){
  //   const a = Math.random()
  //   console.log(a);
    
  // }
  // Function random is called everytime when we make changes in the UI, so we don't need this as it is like truck(main process UI render) ke andar process hi usko bhi dal diya small processes ko... aur wo ek sath chal rahe hai main process ke sath, that is where useEffect comes into picture 
  // we have to do the process after the main process is completed like truck has passed then the motorbike will go not bike will go the  footpath, so the small processes are stored in a side stack and they are run after the UI render process is completed
  // random();
//   const [num, setNum] = useState(1)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('Use Effect is Running...');
    
//   },[num2]);


//   return (
//     <div>
//       <h1>num is {num}</h1>
//       <h1>num2 is {num2}</h1>
//       <button onMouseEnter={function(){
//         setNum(num+1)
//       }}
//       onMouseLeave={() => {
//         setNum2(num2 + 10)
//       }}
//       >Click</button>
//     </div>
//   )
// }

// export default App


// useEffect - main process chalne do aur side by side other processes ko chalne do


//1. jab jab aapki state change huwi tab tab process chalegi useEffect wali
// 2.num+1 wale ko kehte hai mounting, and jab hum dependency array add kardete hai useEffect wale mei then we can see that there is only one time useEffect runs which is the correct use of useEffect






// The dependency array tells React when your effect should run. How you configure it determines the lifecycle behavior:

// 1. With Dependencies [dep1, dep2] (Most Common)
// The effect runs after the initial mount, and then re-runs only when any value in the array changes.

// JavaScript
// useEffect(() => {
//   fetchUserData(userId);
// }, [userId]); // Re-runs whenever `userId` changes
// 2. With an Empty Array []
// The effect runs once after the component mounts and never runs again during updates.

// JavaScript
// useEffect(() => {
//   const handleResize = () => console.log(window.innerWidth);
//   window.addEventListener('resize', handleResize);

//   return () => window.removeEventListener('resize', handleResize);
// }, []); // Runs once on mount; cleanup runs on unmount
// 3. Without a Dependency Array (No second argument)
// The effect runs after every single render. This is rarely what you want and can easily cause performance issues or infinite loops if state is updated inside.

// JavaScript
// useEffect(() => {
//   // Runs after initial render AND after every state/prop update
// });



// How to test and see the difference
// Open your browser's DevTools Console (F12 or Right-Click -> Inspect -> Console), clear the log, and test the two actions:

// Hover into the button (onMouseEnter -> changes num):

// num changes from 1 to 2.

// Look at the console: >>> useEffect triggered! Current num: 2 prints.

// Why: num is inside [num]. React detects 1 !== 2 and runs the effect.

// Move the cursor out of the button (onMouseLeave -> changes num2):

// The UI updates: num2 changes from 100 to 110.

// Look at the console: Nothing prints.

// Why: The component re-rendered because state changed, but React looked at [num], saw num remained 2, and completely skipped running the effect callback



const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achanging(){
    console.log('A ki value change hogayi');
    
  }

  function bchanging(){
    console.log('B ki value change hogayi');
    
  }

  useEffect(function(){
    achanging()
    console.log('Use effect of a is running...');
  }, [a])
  useEffect(function(){
    bchanging()
    console.log('Use effect of b is running...');
  }, [b])

  // [a], [b], [a,b]   jo bracket ke adar hai uske chalne par bas chalega



  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onMouseEnter={() => {
        setA(a+1)
      }}>change A</button>

      <button onMouseEnter={() => {
        setB(b-1)
      }}>Change B</button>



    </div>
  )
}

export default App

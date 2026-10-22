import React,{useState} from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  // object
  const [obj, setObj] = useState({user:"Nikhil", age:23})    

  // array
  const [arr, setArr] = useState([10,20,30])

  // for batch edit 

  const [batchedit, setBatchedit] = useState(0)
  



  const btnclicked = () => {
    // setNum(num)  //  react will not rerender as it know that the same value is given so why do the hardwork to again rerender

    // setNum(20)
    // console.log(num);     // we get num = 10 here but not 20 as in react the process runs asyncronous so different processes run at different times i.e we get old value of num and not new
    // we get the new value immediately in the UI not when we immediately print it

    
    // how to update in an object we can use **Destructuring** that means like we create a var a = 20, so in memory we have a space allocated for a with value = 20 but when we create an array the array reference is stored in memory and array is stored somewhere else in the memory i.e why array, objects , functions are called reference variables


    // making a copy of obj
    // const newNum = {...obj};
    // newNum.user = "Raj"
    // newNum.age = 22

    // setObj(newNum) 

    // console.log(newNum);
    
    // now for array to change

    // const newArr = [...arr]
    
    // console.log(newArr);
    // newArr.push(16)
    // setArr(newArr)
    // console.log(newArr);
    

    // as if we write this only once the value is getting updated
    // setBatchedit(batchedit+1)
    // setBatchedit(batchedit+1)
    // setBatchedit(batchedit+1)


    // SO TO fix this we can use prev concept to fix this
    setBatchedit(prev => (prev+1))
    setBatchedit(prev => (prev+1))
    setBatchedit(prev => (prev+1))

    // in this we see value updates 3 times as stated.

  }



  return (
    <div>
      {/* <h1>{num}</h1> */}
      {/* <h1>{obj.user}, {obj.age}</h1> */}
      {/* <h1>{arr}</h1> */}

      <h1>{batchedit}</h1>
      <br /><br />
      <button onClick={btnclicked}>Click</button>
    </div>
  )
}

export default App

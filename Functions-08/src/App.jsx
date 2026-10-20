import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("button Clicked"); 
  }
  function doublebtnclicked(){
    console.log("double button Clicked"); 
  }

  function mouseenter(){
    console.log("Mouse Entered");
  }

  function inputchanging(val){
    console.log(val);
  }

  function pagescrolling(ele){
    if(ele > 0)
    console.log('seedha Scrolling');
    else{
      console.log('Ulta Scrolling');
      
    }
  }
  return (
    <div onWheel={(elem)=>{
      // console.log(elem);
      pagescrolling(elem.deltaY)
      
    }}>
      {/* <h1>Hello,Nikhil</h1>
      <button onMouseEnter={mouseenter} onClick={btnclicked} onDoubleClick={doublebtnclicked}>Change user</button>
      <button onClick={function(){
        console.log("hello Guys");
        
      }} onDoubleClick={() => {
        console.log("double Clicked Explore");
        
      }}>Explore this</button> */}
{/* 
      <input onChange={function(elem){
        inputchanging(elem.target.value);
      }} type="text" placeholder='Enter Your Name' /> */}
{/* 
      <div onMouseMove={(elem)=>{
        console.log(elem.clientY);
        
      }} className='box'></div> */}


      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>


    </div>
  )
}

export default App

import React from 'react'

function Card(props) {

  // props is an object which contains all the properties passed to the component. In this case, it contains a property called 'user' which is passed from the parent component (App.jsx).
  // console.log(props);
  
  return (

      <div className="card">
        <img src="https://images.unsplash.com/photo-1789247270595-e8ffcf53f155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="profile" />
        <h1>{props.user}, <br/> Age: {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <button>View Profile</button>
      </div>
  )
}

export default Card

import React from 'react'

const App = () => {

  // localStorage.clear()
  // sessionStorage.clear()

  // in local storage we store values in terms of key value pair
  // localStorage.setItem('user','Nikhil')
  // localStorage.setItem('age',22)
  // const user1 = localStorage.getItem('user')
  // const age1 = localStorage.getItem('age')
  // console.log(user1,age1);

  // localStorage.removeItem('user')   //  now if we want to print that is not there we get null
  // localStorage.removeItem('age')

    // Arrays and Objects retreival
    
    // const user = {
    //   username:'Nikhil',
    //   age:22,
    //   city:'Bokaro Steel City'
    // }

    // console.log(user);
    // localStorage.setItem('User',user)
    // localStorage.removeItem('user')
    // when we store a object in local storage it get stored in [object object] form so we cant read it so we have to store object in the form of string we use JSON parse and stringify 
    
    // localStorage.setItem('User',JSON.stringify(user))  // stores how a object is stored

    // const user1 = localStorage.getItem('User')  // we get it form of string as in the string we can see we can't see the down arrow to expand the object
    // const user1 = JSON.parse(localStorage.getItem('User'))  // we get it form of object
    // console.log(typeof(user1));
    // console.log(user1);

    


  return (
    <div>
      App
    </div>
  )
}

export default App


// local storage is a small memory to store your data permanently
// 1. clear 2. setItem 3. getItem 4. removeItem
//  5. to store object or array of objects convert to string by JSON.stringify and 
// 6. when we have to retrieve an object we get in string form so to convert it into object so we have to use JSON.parse to convert from string to object



// Session Storage data remains till we are active at website and then get deleted when we go out
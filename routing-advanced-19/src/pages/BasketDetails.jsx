import React from 'react'
import { useParams } from 'react-router-dom'

const BasketDetails = () => {

    const params = useParams()
    console.log(params);
    

  return (
    <div>
      <h1>{params.id} Basket Details</h1>
    </div>
  )
}

export default BasketDetails

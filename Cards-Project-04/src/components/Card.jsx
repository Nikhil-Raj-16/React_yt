import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
    console.log(props);
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} className="img" alt="Card cover" />
          <button>Save <Bookmark size={16} /></button>
        </div>
        <div className="center">
          <h5>{props.company} <span>{props.datePosted}</span></h5>
          <h4>{props.post}</h4>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>${props.pay}/hr</h3>
            <p>{props.location}</p>
          </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card

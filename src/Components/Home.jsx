import React from 'react'
import vector from '../images/Vector Smart Object 3.svg';
import dadadsasdad from  '../images/dadadsasdad.png';
const Home = () => {
  return (
    <div className='home-page'>
      <div>
        <h1 className="text-center">Welcome to the Hackathon Starter!</h1>
      </div>
      <div className='home-image'>
        <img src={vector} alt="Vector Smart Object" width={671} height={671} style={{borderRadius:"50%"}}/>
        <img src={dadadsasdad} alt="dadadsasdad.png" style={{marginLeft:"-579px"}}/>
      </div>
    </div>
  )
}

export default Home

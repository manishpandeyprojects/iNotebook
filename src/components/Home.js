import React from 'react'
import Notes from './Notes';



function Home(props) {
  return (
    <div className='container'>
      <div className="yourNote my-3">
        <Notes showAlert={props.showAlert} />
      </div>
    </div>
  )
}

export default Home

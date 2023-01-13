import React from 'react'
import Notes from './Notes';



function Home() {
  return (
    <div className='container my-3'>
      <div className="addNote">
        <h3>Add a Note</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="yourNote my-3">
        <Notes />
      </div>
    </div>
  )
}

export default Home

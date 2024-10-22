import React from 'react'

// -----------------------------------
import SideBar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
// -----------------------------------

const Home = ({sidebar}) => {
  return (
    <div style={{display:"flex"}}>
      <SideBar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed sidebar={sidebar}/>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedHeader = () => {
  return (
    <div>
        <div>Shared Header</div>
        <Outlet/>
    </div>
    
  )
}

export default SharedHeader
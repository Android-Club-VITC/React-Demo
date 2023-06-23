import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
<div className='flex justify-between bg-blue-950 p-6 mb-10'>
  <div className='text-red-500 font-bold text-2xl'><Link to="/">Webverse</Link></div>
  <div className='text-red-500 font-bold text-2xl'><Link to="/msg">Send Peter A Message</Link></div>
</div>

</>

  )
}

export default Navbar
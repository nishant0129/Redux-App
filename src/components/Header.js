import React from 'react'
import CartLogo from '../assets/th.jpg'


const Header = () => {
  return (
    <>
        <div className='header'>
            <h1>Home Component</h1>
            <img src={CartLogo} alt=""></img>
        </div>

    </>
  )
}

export default Header

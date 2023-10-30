import React from 'react'
import './Style.css'


const Header = (props) => {
  return (
    <div className='common header'>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Header

import React, { useContext } from 'react'
import './toggle.css'
import { ThemeContext } from '../../context'
export default function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick =(e)=>{
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className='t'>
      <img src="https://cdn-icons-png.flaticon.com/512/8617/8617532.png" alt="" className='t-icon'/>

      <img src="https://cdn-icons-png.flaticon.com/512/1680/1680053.png" className='t-icon' alt="" />

      <div className="t-button" onClick={handleClick} style={{right: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

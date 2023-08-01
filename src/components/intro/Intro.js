import './intro.css'
import React from 'react';
import  Me from '../../img/my_img.png'
export default function intro() {
  return (
    <div className='i section'   id="section1">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Mangesh Chate</h1>
          <div className="i-title">
            <div className="i-title-wrapper " >
              <div className="i-title-item">Full Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Promt Writer</div>
              <div className="i-title-item">Blockchain Developer</div>
            </div>
          </div>
          <p className="i-desc">
           
          </p>


        </div>
        
          <img src="https://thumbs.gfycat.com/AcidicGlamorousCirriped-max-1mb.gif" alt=""   className='i-scroll'/>
      
      </div>
      <div className="i-right">
      <div className="i-bg"></div>
        <img src={Me} alt="" className='i-img'/>
      </div>
    
    </div>
  )
}

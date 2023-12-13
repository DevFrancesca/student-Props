import React from 'react'
import './File.css'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {FaLocationDot} from 'react-icons/fa6'
import {AiOutlineRadarChart} from 'react-icons/ai'

const File = (props) => {
  return (
    <div className='cardCon'>
      <div className="card"style={{backgroundColor :props.stack === "Frontend" ? "white" : "black"}}>
        <div className="left" style={{backgroundColor :props.stack === "Frontend" ? "white" : "black"}}>
            <div className="top "style={{backgroundColor :props.stack === "Frontend" ? "black" : "white"}}></div>
            <div className="one" style={{backgroundColor :props.stack === "Frontend" ? "black" : "white"}}>
                <AiOutlinePhone fill={props.stack === "Frontend" ? "white" : "black"}/>
            </div>
            <div className="one" style={{backgroundColor :props.stack === "Frontend" ? "black" : "white"}}>
                <AiOutlineMail  fill={props.stack === "Frontend" ? "white" : "black"}/>
            </div>
            <div className="one" style={{backgroundColor :props.stack === "Frontend" ? "black" : "white"}}>
                <AiOutlineRadarChart fill={props.stack === "Frontend" ? "white" : "black"}/>
            </div>
            <div className="two" style={{backgroundColor :props.stack === "Frontend" ? "black" : "white"}}>
                <FaLocationDot fill={props.stack === "Frontend" ? "white" : "black"}/>
            </div>
        </div>
        <div className="middle">
            <p style={{color :props.stack === "Frontend" ? "black" : "white"}}>+234 809 932 0641</p>
            <p style={{color :props.stack === "Frontend" ? "black" : "white"}}>agbanzofrancesca@gmail.com</p>
            <p style={{color :props.stack === "Frontend" ? "black" : "white"}}>www.agbanzofrancesca.com</p>
            <p style={{color :props.stack === "Frontend" ? "black" : "white"}}>Boulevard Plaza, Canada</p>
        </div>
        <div className="right">
            <div className="text">
                <h3 style={{color :props.stack === "Frontend" ? "black" : "white"}}>{props.student}</h3>
                <p style={{color :props.stack === "Frontend" ? "black" : "white"}}>{props.stack}</p>
            </div>
            <div className="image" style={{backgroundColor :props.stack === "Frontend" ? "black" : "white"}}>
                <BsPerson fill={props.stack === "Frontend" ? "white" : "black"} size={50}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default File

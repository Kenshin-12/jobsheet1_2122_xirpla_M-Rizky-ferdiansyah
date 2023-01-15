import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Desk = (props) => {
  return (
    <>
    <div className={props.cName}>
            <img alt='ITB' src={props.heroImg} />

            <div className='hero-desk'>
                <p>{props.title}</p>
                <h1>{props.subTitle}</h1>
                <Link to={props.url} className={props.btnClass}><h5>{props.btnText}</h5></Link>
            </div>
         </div>
    <div className="container">
        <div className="container-img">
            <img alt='ITB' className='foto' src={props.logo} />
        </div>
        <div className='container-text'>
            <p>{props.desk}<br/>{props.desk2}</p>
        </div>
    </div>
    </>
  )
}

export default Desk
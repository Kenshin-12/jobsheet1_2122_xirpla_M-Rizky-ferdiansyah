import './Hero.css'
import { Link } from 'react-router-dom';
import VID from "../assets/itbvideo.mp4"

function Hero (props){
    return(
        <>
         <div className={props.cName}>
           <video width="100%" height="100%" autoPlay loop muted>
              <source src={ VID } type="video/mp4"/>
           </video>

            <div className='hero-desk'>
                <p>{props.title}</p>
                <h1>{props.subTitle}</h1>
                <Link to={props.url} className={props.btnClass}><h5>{props.btnText}</h5></Link>
            </div>
         </div>
        </>
    )
}

export default Hero;
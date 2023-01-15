import './Hero.css'
import { Link } from 'react-router-dom';

function Hero (props){
    return(
        <>
         <div className={props.cName}>
            <img alt='ITB' src={props.heroImg} />

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
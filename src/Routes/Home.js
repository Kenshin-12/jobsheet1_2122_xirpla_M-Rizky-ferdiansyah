import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ITB from '../assets/ITB.png'
import Footer from '../components/Footer';

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={ITB}
        title="WELCOME TO"
        subTitle="INSTITUT TEKNOLOGI BANDUNG"
        url="/About"
        btnText="Lihat Selengkapnya"
        btnClass="show"
        />
        <Footer/>
        </>
    )
}

export default Home;
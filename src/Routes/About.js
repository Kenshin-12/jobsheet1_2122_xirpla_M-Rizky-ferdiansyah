import Navbar from '../components/Navbar'
import Desk from '../components/Desk'
import Logo from '../assets/logo2.png'
import ITB2 from '../assets/ITB2.png'

function About (){
    return(
        <>
        <Navbar/>
        <Desk
        cName="hero-mid"
        heroImg={ITB2}
        title="ABOUT"
        btnClass="hide"
        desk="Institut Teknologi Bandung merupakan kampus impian bagi hampir semua pelajar di Indonesia, terutama yang ingin melanjutkan pendidikan pada bidang teknik/sains. Bagaimana tidak, kampus ini merupakan lokasi dari sekolah tinggi teknik pertama di Indonesia yang berdiri pada tahun 1920 dengan nama De Technische Hoogeschool te Bandung. Institut Teknologi Bandung telah lebih dari 50 tahun berkontribusi dalam menyelenggarakan pendidikan tinggi di Indonesia. Institut Teknologi Bandung (ITB) telah mendapatkan ranking 4 dari 5 Broad Subjects serta 13 dari 51 Narrow Subjects yang ada pada Quacquarelli Symonds (QS) World University Ranking (WUR). Dan banyak banget lho tokoh-tokoh besar negeri ini yang merupakan alumni dari kampus ini!"
        desk2="Yang pertama adalah Ir. Soekarno, yang merupakan presiden pertama Indonesia. Selain itu, kalian juga pasti mengenal sosok Bapak Teknologi yang namanya sudah melambung di bidang aviasi, bahkan hingga tingkat internasional, yaitu B.J. Habibie. Ada juga nih tokoh muda berprestasi yang juga merupakan alumni dari ITB, yaitu Achmad Zaky. Beliau adalah founder dan mantan CEO dari salah satu platform E-commerce terbesar di Indonesia, yaitu BukaLapak."
        logo={Logo}
        />
        </>
    )
}

export default About;
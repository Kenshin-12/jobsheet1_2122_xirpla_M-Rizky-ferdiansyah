import Navbar from '../components/Navbar'
import Desk from '../components/Desk'
import Logo from '../assets/logo2.png'
import ITB2 from '../assets/ITB2.png'
import Foto from '../assets/rektor.png'
import Footer from '../components/Footer'

function About (){
    return(
        <>
        <Navbar/>
        <Desk id="about"
        cName="hero-mid"
        heroImg={ITB2}
        title="ABOUT"
        btnClass="hide"
        desk=<p><b>Institut Teknologi Bandung</b> merupakan kampus impian bagi hampir semua pelajar di Indonesia, terutama yang ingin melanjutkan pendidikan pada bidang <mark>teknik/sains</mark>. Bagaimana tidak, kampus ini merupakan lokasi dari sekolah tinggi teknik pertama di Indonesia yang berdiri pada tahun <strong>1920</strong> dengan nama <em>De Technische Hoogeschool te Bandung</em>. Institut Teknologi Bandung telah lebih dari 50 tahun berkontribusi dalam menyelenggarakan pendidikan tinggi di Indonesia. Institut Teknologi Bandung (ITB) telah mendapatkan <strong>ranking 4 dari 5 Broad Subjects</strong> serta 13 dari 51 Narrow Subjects yang ada pada Quacquarelli Symonds<sup>(QS)</sup> World University Ranking<sup>(WUR)</sup> . Dan banyak banget lho tokoh-tokoh besar negeri ini yang merupakan alumni dari kampus ini!<br/>
        Yang pertama adalah Ir. Soekarno, yang merupakan presiden pertama Indonesia. Selain itu, kalian juga pasti mengenal sosok Bapak Teknologi yang namanya sudah melambung di bidang aviasi, bahkan hingga tingkat internasional, yaitu B.J. Habibie. Ada juga nih tokoh muda berprestasi yang juga merupakan alumni dari ITB, yaitu Achmad Zaky. Beliau adalah founder dan mantan CEO dari salah satu platform E-commerce terbesar di Indonesia, yaitu BukaLapak.</p>
        logo={Logo}
        bio = "Prof. Reini Wirahadikusumah, Ph.D. adalah rektor wanita pertama di Institut Teknologi Bandung untuk periode 2020-2025 yang melanjutkan kepemimpinan Prof. Dr. Ir. Kadarsah Suryadi, DEA sebagai rektor Institut Teknologi Bandung periode 2015-2020."
        pimpinan={Foto}
        />
        <Footer/>
        </>
    )
}

export default About;
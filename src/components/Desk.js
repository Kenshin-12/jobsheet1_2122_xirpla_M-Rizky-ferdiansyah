import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import VID2 from '../assets/itbvideo2.mp4'
import AUD from '../assets/limbo.mp3'

const Desk = (props) => {
  return (
    <>
          <div className={props.cName}>
            <img alt='ITB' src={props.heroImg} />

            <div className='hero-desk'>
                <a href="#container" className='scroll-down'>
                  About
                </a>
            </div>
         </div>
    <div id="container">
          <header style={{paddingBottom:'2.5rem'}}>
                <h1 style={{ textAlign:"center", display:'block'}}>Tentang ITB</h1>
          </header>
          <div className='tentang' style={{ justifyContent:'center', display:'flex', flexDirection:'row' }}>
              <div className="container-img">
                <img alt='ITB' className='foto' src={props.logo} />
              </div>
              <div className='container-text'>
                  <p align="justify">{props.desk}</p>
              </div>
          </div>
    </div>
    <div className='profil'style={{ justifyContent:'center', display:'block', flexDirection:'column', width:'100%', height:'65vh' }}>
      <header>
      <h1 style={{ textAlign:"center", display:'block', fontFamily:'Poppins' }}>PIMPINAN</h1>
      </header>
      <div className='dataDiri'style={{ justifyContent:'center', display:'flex', flexDirection:'row', width:'100%', height:'55vh', gap:'0.5rem' }}>
        <div className='biodata' style={{ justifyContent:'center', display:'block', flexDirection:'column', width:'55%' }}>
          <h2>Rektor</h2>
          <h3 style={{fontWeight:'inherit', textDecoration:'underline'}}>Prof. Reini Wirahadikusumah, Ph.D.</h3>
          <div className='biografi'>
            <p>{props.bio}</p>
          </div>
        </div>
        <div className='rektor'>
            <img alt='rektor' className='foto2' src={props.pimpinan} />
        </div>
      </div>  
    </div>
    <div className='statistik'>
      <header style={{ textAlign:"center", display:'block', fontFamily:'Poppins' }}>
        <h1>FAKTA DAN ANGKA</h1>
      </header>
      <div className='tabel'>
      <table style={{backgroundColor:'#3D6CB9', borderRadius:'15px', marginLeft:'1rem', width:'40%'}}>
        <tr>
          <th colSpan='2' >World Ranking <i class="fa-solid fa-globe"></i> </th>
        </tr>
        <tr>
          <td>THE World Rankings 2023</td>
          <td style={{textAlign:'right'}}>1201-1500</td>
        </tr>
        <tr>
          <td>THE Asia Rankings 2022</td>
          <td style={{textAlign:'right'}}>301-350</td>
        </tr>
        <tr>
          <td>QS World Rankings 2023</td>
          <td style={{textAlign:'right'}}>#235</td>
        </tr>
        <tr>
          <td>QS Asian Rankings 2023</td>
          <td style={{textAlign:'right'}}>#63</td>
        </tr>
        <tr>
          <td>Engineering and Technology</td>
          <td style={{textAlign:'right'}}>#179</td>
        </tr>
        <tr>
          <td>Natural Sciences</td>
          <td style={{textAlign:'right'}}>#372</td>
        </tr>
        <tr>
          <td>Social Sciences & Management</td>
          <td style={{textAlign:'right'}}>#238</td>
        </tr>
          <td>Dan Lain-lain</td>
      </table> 
      <table style={{backgroundColor:'#3D6CB9', borderRadius:'15px', marginLeft:'1rem', width:'35%', height:'25vh'}}>
        <tr>
          <th colSpan='2'> Pendidikan dan Pengajaran <i class="fa-solid fa-graduation-cap"></i> </th>
        </tr>
        <tr>
          <td>Multikampus</td>
          <td style={{textAlign:'right'}}>3</td>
        </tr>
        <tr>
          <td>Fakultas dan Sekolah</td>
          <td style={{textAlign:'right'}}>12</td>
        </tr>
        <tr>
          <td>Program Studi</td>
          <td style={{textAlign:'right'}}>130</td>
        </tr>
        <tr>
          <td>Joint Degrees</td>
          <td style={{textAlign:'right'}}>10</td>
        </tr>
        <tr>
          <td>Dosen</td>
          <td style={{textAlign:'right'}}>1.447</td>
        </tr>
        <tr>
          <td>Mahasiswa</td>
          <td style={{textAlign:'right'}}>23.848</td>
        </tr>
      </table>  
      <table style={{backgroundColor:'#3D6CB9', borderRadius:'15px', marginLeft:'1rem', width:'35%'}}>
        <tr>
          <th colSpan='2' >Riset <i class="fa-solid fa-magnifying-glass"></i> </th>
        </tr>
        <tr>
          <td>Pusat</td>
          <td style={{textAlign:'right'}}>24</td>
        </tr>
        <tr>
          <td>Pusat Penelitian</td>
          <td style={{textAlign:'right'}}>7</td>
        </tr>
        <tr>
          <td>Pusat Keunggulan IPTEK</td>
          <td style={{textAlign:'right'}}>6</td>
        </tr>
        <tr>
          <td>Kelompok Keahlian</td>
          <td style={{textAlign:'right'}}>111</td>
        </tr>
        <tr>
          <td>Laboratorium</td>
          <td style={{textAlign:'right'}}>198</td>
        </tr>
        <tr>
          <td>Scopus Jurnal</td>
          <td style={{textAlign:'right'}}>1.248</td>
        </tr>
        <tr>
          <td>International Journal</td>
          <td style={{textAlign:'right'}}>421</td>
        </tr>
        <tr>
          <td>Proceedings International</td>
          <td style={{textAlign:'right'}}>674</td>
        </tr>         
      </table>  
      <table style={{backgroundColor:'#3D6CB9', borderRadius:'15px', marginLeft:'1rem', width:'15%', height:'15vh'}}>
        <tr>
          <th colSpan='2' >Inovasi <i class="fa-solid fa-rocket"></i> </th>
        </tr>
        <tr>
          <td>Startup</td>
          <td style={{textAlign:'right'}}>104</td>
        </tr>
        <tr>
          <td>HKI</td>
          <td style={{textAlign:'right'}}>315</td>
        </tr>
        <tr>
          <td>Inovasi</td>
          <td style={{textAlign:'right'}}>137</td>
        </tr>
        <tr>
          <td>Tenant</td>
          <td style={{textAlign:'right'}}>972</td>
        </tr>
      </table>   
      </div>
    </div>
    <div className='Other'>
      <div className='kunjungan'>
      <header>
        <h2 style={{textAlign:'Center'}}>KUNJUNGAN</h2>
      </header>
      <ul>
        <li>Kampus Ganesha</li>
        <li>Kampus Jatinagor</li>
        <li>Kampus Cirebon</li>
        <li>Observatorium Bosscha</li>
        <li>Museum Zoologi</li>
        <li>Pusat Iptek Sabuga</li>
      </ul>  
      </div>
      <div className='cabang'>
      <header>
        <h2 style={{textAlign:'Center'}}>CABANG</h2>
      </header>
      <ol>
        <li>ITB Kampus Ganesha</li>
        <li>ITB Kampus Jatinagor</li>
        <li>ITB Kampus Cirebon</li>
      </ol>  
      </div>
    </div>
    <div className='video' style={{ display:'grid', width:'100%' }}>
        <header style={{ height:"10vh", paddingBottom:'5rem'}}> 
          <h1 style={{ textAlign:'center', textDecoration:'underline' }}>VIDEO</h1>
        </header>
        <div className='vid'>
          <div className='kotak'>
            <video width="95%" height="90%" controls>
              <source src={VID2} type="video/mp4"/>
            </video>
          </div>
          <div className='kotak'>
          <iframe width="90%" height="90%"
          src="https://www.youtube.com/embed/dmDdtl3p_po">
          </iframe>
          </div>
        </div>
    </div>
    <audio controls loop>
      <source src={AUD} type='audio/mp3'/>
    </audio>
    </>
  )
}

export default Desk
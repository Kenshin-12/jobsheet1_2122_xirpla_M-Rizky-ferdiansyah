import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <div className='pendaftaran'>
        <img alt='pendaftaran' src={"https://www.itb.ac.id/files/dokumentasi/1672991660-20211218_123754.jpg"} />
        <div className='hero-desk'>
          <a href='#formulir' className='scroll-down'>
            Form Pendaftaran
          </a>
         </div>
    </div>
    <div id='formulir' className='form'>
      <header>
        <h1 style={{ textAlign:'center'}}>
          FORMULIR
        </h1>
      </header>
      <div className='formName'>
        <form action='' method='post'>
            <div className='name'>
              <div className='Fname'>
                <label for="fname">Nama Depan :</label>
                <input type="text" id="fname" className='lengkap' name="fname" />
              </div>
              <div className='Fname'>
                <label for="lname">Nama Belakang :</label>
                <input type="text" id="lname" className='lengkap' name="lname" />
              </div>
            </div>
            <div className='pilihan'>
              <div className='tanggal-lahir'>
                <label for="lname">Tanggal Lahir :</label>
                <input type="date" id="lname" className='tanggal' name="lname" />
              </div>
              

              <div className='jurusan'>
              <label for="cars">Jurusan :</label>
                <select name="cars" id="cars">
                  <option value="volvo">Teknik Informatika</option>
                  <option value="saab">Teknik Mesin</option>
                  <option value="mercedes">Kedokteran</option>
                  <option value="audi">Pertanian</option>
                </select>
              </div>
            </div>
            <div className='gender'>
                <header>
                  <h2>
                    Jenis Kelamin
                  </h2>
                </header>
                <div className='kelamin'>
                  <input type="radio" id="html" name="gender" value="Laki-laki"/>
                  <label className='cwk' for="html">Laki-laki</label>
                </div>
                <div className='kelamin'>
                  <input type="radio" id="html" name="gender" value="Perempuan"/>
                  <label className='cwk' for="html">Perempuan</label>
                </div>
            </div>

            <button className='submit' type='submit' >
              <a href="https://www.w3schools.com/" target="_blank">Submit</a>
            </button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Form
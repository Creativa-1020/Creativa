import React, {useState, createContext, useContext} from 'react';


const ThemeContext = createContext(null)

const Contacto1 = () => {

  const [text, setText] = useState('')

  return(
    <div className='contacto-1'>
      <ThemeContext.Provider value={{text}}>
        <h1>Conoce a nuestro Equipo</h1>
        <h3>Conoce a nuestros talentosos miembros del partido </h3>
        <div className='input-section'>
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input 
            type='text'
            value={text}
            onChange={(e)=>{
              setText(e.target.value)
            }}
            placeholder='Busca por nombre o rol'
          />
        </div>
          <Contact1Information />
      </ThemeContext.Provider>
    </div>
  )
}

const Contact1Information = () => {

  const [usuario, setUsuario] = useState([
    {
      nombre: "Ziven Javier Gamarra Sanchez",
      rol: "Alcalde",
      correo: "72334212@alumnos.innovaschools.edu.pe",
      numero: "+51 952 598 930",
      redesSociales: {
        instragam: "https://www.instagram.com/zglvjl/?utm_source=ig_web_button_share_sheet",
        whatsapp: "952598930",
        discord: "savitar7727"
      }
    },
    {
      nombre: "Milene Ariana Negra Villa",
      rol: "Teniente Alcaldesa",
      correo: "72826552@alumnos.innovaschools.edu.pe",
      numero: "",
      redesSociales: {
        instragam: "",
        whatsapp: "",
        discord: ""
      }
    },
    {
      nombre: "Fernando Joaquim Bullon Campos",
      rol: "Regidor de Comunicaciones y Marketing",
      correo: "61842265@alumnos.innovaschools.edu.pe",
      numero: "+51 958 040 785",
      redesSociales: {
        instragam: "https://www.instagram.com/probroferxdxd/",
        whatsapp: "958040785",
        discord: "Probroferxdxd#7706"
      }
    },
    {
      nombre: "Renato Arturo Carañi Ramos",
      rol: "Regidor de Proyección Social y de Deportes",
      correo: "77999315@alumnos.innovaschools.edu.pe",
      numero: "",
      redesSociales: {
        instragam: "",
        whatsapp: "",
        discord: ""
      }
    },
    {
      nombre: "Mariana Vasquez Gonzales",
      rol: "Regidora de vida comunitaria y de derechos de los estudiantes",
      correo: "62481929@alumnos.innovaschools.edu.pe",
      numero: "",
      redesSociales: {
        instragam: "",
        whatsapp: "",
        discord: "JFDEM#7374"
      }
    },
    {
      nombre: "Darling Stefany Torvisco",
      rol: "Regidora Medioambiente",
      correo: "77594412@alumnos.innovaschools.edu.pe",
      numero: "+51 987 421 293",
      redesSociales: {
        instragam: "https://www.instagram.com/darstff_/?utm_source=ig_web_button_share_sheet",
        whatsapp: "987421293",
        discord: "darlxn"
      }
    },
    {
      nombre: "Adriana Sofia Suarez Obregon",
      rol: "Regidora de Sauld Integral",
      correo: "78525039@alumnos.innovaschools.edu.pe",
      numero: "",
      redesSociales: {
        instragam: "",
        whatsapp: "",
        discord: ""
      }
    },
    {
      nombre: "Diaco Cristian Paredes Cotrina",
      rol: "Regidora de Educación, Arte y Cultura",
      correo: "78525039@alumnos.innovaschools.edu.pe",
      numero: "",
      redesSociales: {
        instragam: "",
        whatsapp: "",
        discord: ""
      }
    },
  ])

  const {text: searchQuery} = useContext(ThemeContext)

  const filterUsuario = usuario.filter(element => 
    element.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || element.rol.toLowerCase().includes(searchQuery.toLowerCase())
  )



  return(
    <div className='information'>
      {filterUsuario.length > 0 ? (
      
      filterUsuario.map((element)=>(
        <div className='usuario'>
          <div className='header'>
            <section>
              <div className='user-picture'></div>
            </section>
            <section>
              <h3>{element.nombre}</h3>
              <h4>{element.rol}</h4>
            </section>
          </div>
          <div className='main'>
            <ul className='data'>
              <li><span><i class="fa-solid fa-envelope"></i></span>{element.correo}</li>
              {
                element.numero !== '' ? (
                  <li><span><i class="fa-solid fa-phone"></i></span>{element.numero}</li>
                ) : (
                  <li></li>
                )
              }
            </ul>
            <ul className='redes-sociales'>
              {
                element.redesSociales.instragam !== '' ? (
                  <li><a href={element.redesSociales.instragam}><i class="fa-brands fa-instagram"></i></a></li>
                ) : (
                  <li></li>
                )
              }

              {
                element.redesSociales.whatsapp !== '' ? (
                  <li onClick={(e) =>{
                    e.target.classList.toggle('active')
                  } 
                }>
                  <i class="fa-brands fa-whatsapp">
                    <div className='alert alert-whatsapp'>{element.redesSociales.whatsapp}</div>
                  </i>
                </li>
                ) : (
                  <li></li>
                )
              }

              {
                element.redesSociales.discord !== '' ? (
                  <li onClick={(e) =>{
                    e.target.classList.toggle('active')
                  } 
                }>
                    <i class="fa-brands fa-discord">
                      <div className='alert alert-discord'>{element.redesSociales.discord}</div>
                    </i>
                  </li>
                ) : (
                  <li></li>
                )
              }

            </ul>
            <button className='button'>Ver Bio</button>
          </div>
        </div>
      )) ) : (
        <h1>Not Found User</h1>
      )}
    </div>
  )
}

const Contacto = () => {
  return (
    <div className='contacto'>
      <Contacto1 />
    </div>
  );
};

export default Contacto;

import React from 'react';

const About = () => {
  return (
    <div className='sobre-nosotros'>
      <About1 />
    </div>
  );
};

const About1 = () => {

  const extraInformation = [
    {
      text: "Postulando: 2025",
      icon: <i class="fa-solid fa-building"></i>
    },
    {
      text: "Jr. Alipio Ponce con Calle Comandante Juan Benites y Jr",
      icon: <i class="fa-solid fa-location-dot"></i>

    },
    {
      text: "Miembros: 8",
      icon: <i class="fa-solid fa-users"></i>
    }
  ]

  return(
    <div className='sobre-nosotros-1'>
      <div className='display'>
        <header>
          <div className='logo-atractivo'></div>
          <h1>CREATIVA</h1>
        </header>
        <main>
          <section>
            <div className='title'>
              <h3>Descripción general del partido</h3>
              <h5>Con ideas para el 2025</h5>
            </div>
            <div className='second-information'>
              <p>¡Bienvenidos a Creativa ! Somos un equipo de estudiantes apasionados y dedicados de Innova Schools Carabayllo-Enace, unidos por una misión: hacer de nuestra escuela un lugar donde cada estudiante pueda crecer, aprender y disfrutar de su tiempo aquí al máximo. Estamos comprometidos en crear un ambiente positivo, inspirador y lleno. Nuestro equipo cree que el colegio debe ser más que un lugar para estudiar; debe ser un espacio donde todos se sientan valorados, motivados y apoyados en sus ideas. Para eso, hemos diseñado propuestas únicas que combinan actividades artísticas, educativas, deportivas y de bienes.
              </p>
            </div>
            
          </section>
          <section> 
            {
              extraInformation.map((element)=>(
                <span>{element.icon} {element.text}</span>
              ))
            }
          </section>
        </main>
      </div>
    </div>
  )
}

export default About;

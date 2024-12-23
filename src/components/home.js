import React, {useState, useRef, useEffect, createContext, useContext} from 'react';

const Home1 = () => {

  return(
    <div className='inicio-1'>
      <div className='background'></div>
      <div className='information'>
        <h1>CREATIVA <i className="fa-solid fa-book-open" style={{fontSize: "3rem"}}></i></h1>
        <h3 style={{animationDelay: "0.3s"}}>Presentando Propuestas para:</h3>
        <div className='carrusel-vertical' style={{animationDelay: "0.6s"}}>
          <div className='texto-visible'>    
            <ul>
              {["Potenciar al colegio", "Mejorar a la institucion", "Liberar la creatividad", "Desarrollo estudiantil", "Dar voz al alumnado", "Amplificar los servicios de la institucion", "Romper las barreras de la educacion"].map((element)=>(
                <li>{element}</li>
              ))}
            </ul>
          </div>
        </div>
        <a style={{animationDelay: "0.9s"}} href='#inicio-2'>Más información</a>
      </div>
    </div>
  )
}

const Home2 = () => {

  const mainRef = useRef(null);

  useEffect(() => {
    // Define la función de callback para el IntersectionObserver
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          console.log("El elemento se ve")
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    // Configura el IntersectionObserver
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Cambia el umbral según tus necesidades
    };

    const observer = new IntersectionObserver(callback, options);

    // Observa el elemento referenciado
    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    // Limpieza del observer al desmontar el componente
    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return(
    <div className='inicio-2 visible' id='inicio-2' ref={mainRef}>
      <h1>Problemática</h1>
      <div className='problematicas'>
        <div className='problematica-1' style={{animationDelay: "0.3s"}}>
          <div className='header'>
            <span><i class="fa-solid fa-book-open"></i></span>
            <h3>Rendimiento Académico</h3>
          </div>
          <div className='main'>
            <p>Falta de preparación académica de alta exigencia dentro de la institución o material de la misma; 
              pese a que aplicaciones como aleks o khan academy ofrecen estas oportunidades en cierta medida siguen 
              si ser recursos suficientes para los estudiantes que buscan por formación preuniversitaria; (educación integral)</p>
          </div>
        </div>
        <div className='problematica-2' style={{animationDelay: "0.5s"}}>
          <div className='header'>
            <span><i class="fa-solid fa-toilet"></i></span>
            <h3>Higiene</h3>
          </div>
          <div className='main'>
            <p>La negligencia de los estudiantes sobre el desperdicio de residuos aprovechables y no aprovechables 
              que generan un mal hábito hacia los estudiantes al igual que un mal aspecto en el aula;</p>
          </div>
        </div>
        <div className='problematica-3' style={{animationDelay: "0.7s"}}>
          <div className='header'>
            <span><i class="fa-solid fa-palette"></i></span>
            <h3>Habilidades Artisticas</h3>
          </div>
          <div className='main'>
            <p>La falta de apoyo para el arte en la institución, el cual es necesario tanto por los cursos que se realizan 
              como para las actividades mismas de los estudiantes y a su vez entorpece el trabajo así como la creatividad 
              e iniciativa en la materia musical; (arte y cultura)</p>
          </div>
        </div>
        <div className='problematica-4' style={{animationDelay: "0.7s"}}>
          <div className='header'>
            <span><i class="fa-solid fa-feather"></i></span>
            <h3>Literatura</h3>
          </div>
          <div className='main'>
            <p>Carencia de variedad literaria en el carrito de biblioteca de la escuela que abrió puertas a una variedad 
              de experiencias y perspectivas incluidas las del arte mismo; la falta de ello significa un no aprovechamiento
              de todo su potencial para formar una mente crítica y creativa en los escolares; (formación integral)</p>
          </div>
        </div>
        <div className='problematica-5' style={{animationDelay: "0.7s"}}>
          <div className='header'>
            <span><i class="fa-solid fa-palette"></i></span>
            <h3>Pérdidas de objetos</h3>
          </div>
          <div className='main'>
            <p>Las constantes pérdidas de materiales en el salón de clases representa un desafío significativo 
              para el proceso educativo , afectando tanto la disponibilidad de recursos como el rendimiento académico 
              de los estudiantes;(vida comunitaria  y derecho de los estudiantes)  </p>
          </div>
        </div>
        <div className='problematica-6' style={{animationDelay: "0.7s"}}>
          <div className='header'>
            <span><i class="fa-solid fa-medal"></i></span>
            <h3>Voto en Olimpiadas</h3>
          </div>
          <div className='main'>
            <p>La falta de opinión y voto por parte de los estudiantes para los periodos de olimpiadas a demostrado ser 
              un impedimento para la misma realización de las actividades de estas y reduce el interés por ellas al tener 
              varias pocas popularidad o aceptación;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home3 = () => {

  const mainRef = useRef(null);

  useEffect(() => {
    // Define la función de callback para el IntersectionObserver
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          console.log("El elemento se ve")
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    // Configura el IntersectionObserver
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Cambia el umbral según tus necesidades
    };

    const observer = new IntersectionObserver(callback, options);

    // Observa el elemento referenciado
    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    // Limpieza del observer al desmontar el componente
    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return(
    <div className='inicio-3'>
      <div className='information' ref={mainRef}>
        <h1>Por eso <i>CREATIVA</i>: <span>Transformando desafíos en oportunidades</span></h1>
        <p style={{animationDelay: "0.3s"}}>Somos Creativa. Un partido postulante al municipio escolar 2025. Hemos identificado multiples problematicas en la institucion y su estado actual, oportunidades de mejora (aqui le metes lo que te mande antes) y trabajamos con diversas alternativas de solucion y propuestas para suplir estos puntos y potenciar las fortalezas, tambien varias, que presenta Innova Schools Carabayllo-Enace</p>
      </div>
      <div className='background'></div>
    </div>
  )
}

const ThemeContext = createContext(null)

const Home4 = () => {

  const mainRef = useRef(null);
  const mainRef1 = useRef(null)

  const [modal, setModal] = useState(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(callback, options);

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    if (mainRef1.current) {
      observer.observe(mainRef1.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
      if (mainRef1.current) {
        observer.unobserve(mainRef1.current);
      }
    };
  }, []);

  const [propuestas, setPropuestas] = useState([
    {
      nombre: "TE360 (True Education 360)",
      icono: <i class="fa-solid fa-code-branch"></i>,
      proposito: "Ampliación de nuevas ramas en la educación (Eduación Financiera, Programación, etc)",
      datos: [
        "Inversión: Baja - Tiempo: Medio", 
        "Mentores: Alumnos con habilidades destacadas en un rubro. Pueden brindar clases en vivo o grabadas para compartirlo en un drive dirigido a personas que quisieran aprender algo nuevo. (Clases grabadas de 5 min cada clase)",
        "Es eficiente porque el estudiante a la hora de ver a fondo el tema, poco a poco se dará cuenta de la carrera que va a estudiar. ",
        "El estudiante aprenderá a resolver problemas de la vida con los conocimientos brindados en las clases.",
        "Organizaciones como la Unicef (Unicef, 2019, 21st Century Education), la Harvard Business Review, informan sobre la importancia de este tipo de enseñanzas en las instituciones educativas.",
        "El estudiante tendrá la oportunidad de presenciar el amplio panorama laboral del rubro al que optó por inscribirse.",
        "Al añadir nuevas ramas educativas, los estudiantes van presenciando y adaptándose al constante cambio que el mundo está dando"
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Educación Z",
      icono: <i class="fa-solid fa-book"></i>,
      proposito: "Ofrecer material preuniversitaria (Exámenes Simulacros, temas que vienen en los exámenes, etc)",
      datos: [
        "Inversión: Baja - Tiempo: Bajo",
        "Los estudiantes tendrán acceso a material educativo para la preparación de los exámenes simulacros o de admisión y/o exámenes pasados de admisión.",        "Los estudiantes tendrán mayor autocontrol a la hora de resolver un examen debido a la frecuencia con la que lo resolverán.",
        "Los estudiantes identificarán sus puntos fuertes y débiles a la hora de dar exámen."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Visual Arts Hub",
      icono: <i class="fa-solid fa-palette"></i>,
      proposito: "Galería de dibujos en la institución educativa (Espacio artístico escolar)",
      datos: [
        "Inversión: Media-Baja - Tiempo: Medio",
        "Participación de estudiantes: Todos los estudiantes pueden contribuir con sus obras de arte, fomentando una mayor inclusión y diversidad en la exposición.",
        "Exhibiciones periódicas: Galerías temporales donde se rotan los trabajos para mantener la frescura de la galería.",
        "Autoestima y confianza: La visibilidad de las obras de arte en la galería ayuda a los estudiantes a sentir orgullo y reconocimiento por su trabajo.",
        "Desarrollo de habilidades críticas: El análisis de las obras fomenta el pensamiento crítico, tanto en la creación como en la observación.",
        "Eventos y exposiciones: La galería puede ser utilizada para realizar eventos escolares, como noches de arte o concursos.",
        "Ambiente escolar inspirador: El arte expuesto mejora el ambiente escolar, haciéndolo más atractivo y estimulante para todos.",
        "Fomento de la creatividad: Los estudiantes tienen la libertad de explorar diferentes estilos y técnicas artísticas.",
        "Reconocimiento de talentos no académicos: La galería permite que los estudiantes con talento artístico sean reconocidos.",
        "Trabajo en equipo y colaboración: Los proyectos artísticos en grupo fomentan la colaboración y el sentido de comunidad entre los estudiantes."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Student Convenience Station",
      icono: <i class="fa-solid fa-blender-phone"></i>,
      proposito: "Implementación de una máquina expendedora en la institución educativa (Comodidad y alimentación balanceada)",
      datos: [
        "Inversión: Media - Tiempo: Bajo",
        "Comodidad para los estudiantes: Ofrece acceso rápido a snacks y bebidas.",
        "Alimentación balanceada: Se pueden incluir opciones saludables.",
        "Generación de ingresos: Los fondos recaudados pueden ser reinvertidos en mejoras escolares.",
        "Reducción de tiempo perdido: Los estudiantes pueden evitar largas filas en la cafetería.",
        "Opciones personalizadas: La máquina puede adaptarse a las preferencias y necesidades de los estudiantes.",
        "Promoción de hábitos saludables: Incentivar a los estudiantes a elegir opciones nutritivas.",
        "Practicidad durante eventos escolares: Puede ser una opción rápida para eventos extracurriculares.",
        "Uso de tecnología y automatización: Los estudiantes se familiarizan con la tecnología de autoservicio.",
        "Reducir la necesidad de salir del campus: Los estudiantes no necesitan salir del colegio para comprar alimentos."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Votaciones estudiantiles para las Olimpiadas",
      icono: <i class="fa-solid fa-volleyball"></i>,
      proposito: "Participación activa de los estudiantes en las decisiones deportivas",
      datos: [
        "Inversión: Nula-Baja",
        "Participación de los estudiantes: Serán partícipes de las decisiones sobre los deportes y actividades.",
        "Solución de problemática: Los estudiantes podrán votar por las actividades que consideran más atractivas.",
        "Fundamento: Incluir a los estudiantes en decisiones los prepara para trabajar en entornos sociales.",
        "Realización: El alumnado será consciente abiertamente de las propuestas y planes para las Olimpiadas 2025."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Libros preuniversitarios y exámenes en el carrito de biblioteca",
      icono: <i class="fa-solid fa-square-root-variable"></i>,
      proposito: "Brindar material para la preparación académica de los estudiantes de forma libre",
      datos: [
        "Inversión: Baja-Media",
        "Educación de calidad: Se les brindará a los estudiantes material para un siguiente paso en su preparación académica de forma libre.",
        "Opcionalidad: Cualquiera puede beneficiarse de esta propuesta más no es obligatoria, los no interesados no se verán perjudicados por ello, es material extracurricular a lo trabajado en clase.",
        "Impacto: La posibilidad de material preparatorio para exámenes de admisión tanto nacionales como internacionales junto con la metodología de estudio de Innova Schools permitirán una preparación íntegra para cualquier objetivo, resaltando así las capacidades comunicativas e intelectuales.",
        "Realización: En el carrito de librería se colocarán libros con ejercicios preuniversitarios de Pamer, Lumbrera Editorial, Pitágoras, etc; así como exámenes de años anteriores de universidades tanto nacionales como internacionales. Aparte se dará acceso a diccionarios de inglés para los que lo necesiten."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Cómics y novelas gráficas en carrito de biblioteca",
      icono: <i class="fa-solid fa-book-open"></i>,
      proposito: "Ofrecer lectura de cómics y novelas gráficas para fomentar el hábito lector",
      datos: [
        "Inversión: Baja-Media",
        "Lectura multipropósito: Los cómics presentan múltiples beneficios, al ser de fácil comprensión y memorización refuerzan estas habilidades, así como la alfabetización visual, expresión oral y escrita.",
        "Fomentar hábito lector: Al ser de fácil comprensión y lectura fomentan y generan constancia y ganas de seguir adentrándose en ese mundo.",
        "Desarrollar imaginación: Los cómics son muy diversos y la imaginación y cualidades que se plasman en ellos son claras, el reforzamiento constante mediante este método causa un efecto positivo en los estudiantes aumentando su creatividad, innovación y pensamiento crítico.",
        "Implementación: Se ofrecerán cómics y novelas gráficas en el carrito de la librería de editoriales como Marvel, DC, etc., para que los estudiantes puedan aprovecharlos en los espacios de recreación."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Reforzamiento de proliferación de concursos y ferias nacionales",
      icono: <i class="fa-solid fa-award"></i>,
      proposito: "Brindar oportunidades de estudio y desarrollo académico mediante la participación en concursos y ferias nacionales",
      datos: [
        "Costo: Bajo",
        "Oportunidades de estudio: Los concursos y ferias brindan nuevas oportunidades de aprendizaje para estudiantes de primaria y secundaria, incrementando sus conocimientos en áreas diversas.",
        "Logros académicos: La participación en estos eventos se reflejará en el currículum, destacando los logros y diplomas obtenidos en los proyectos.",
        "Fomentar habilidades: Los estudiantes desarrollarán iniciativa y responsabilidad, fortaleciendo el trabajo en equipo, optimización de tiempos y recursos, y técnicas de estudio.",
        "Mejora de currículum: La participación en actividades extracurriculares agrega valor al currículum, incrementando las oportunidades para becas y empleos futuros.",
        "Implementación: Información sobre concursos y ferias como Conamat, Juegos Florales Escolares Nacionales (JFEN), Premio Nacional de Narrativa y Ensayo José María Arguedas (JMA), Concurso Nacional de Comprensión Lectora El Perú Lee (ELP), y la Feria Eureka se publicará en la página web y mediante afiches. Los estudiantes podrán recibir orientación de los miembros del partido o a través del chatbot."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Reconocimiento de personas importantes en la Historia - Motivaciones",
      icono: <i class="fa-solid fa-users"></i>,
      proposito: "Inspirar y educar a los estudiantes mediante la exposición continua de personajes históricos importantes",
      datos: [
        "Inversión: Baja",
        "Encargados: El partido y voluntarios interesados en compartir información o reseñas históricas.",
        "Beneficios para los estudiantes: Aprenden visual y continuamente sobre figuras históricas importantes.",
        "Inspiración: Los héroes históricos observados motivan a los estudiantes.",
        "Investigación: Los estudiantes se sienten motivados a investigar más sobre los personajes históricos.",
        "Entorno educativo: Las paredes llenas de información histórica enriquecen el ambiente educativo.",
        "Reflexión: El entorno invita a la reflexión y fomenta conversaciones entre los estudiantes."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Elaboración de campañas de reciclaje por grados en la educación acumulando puntos y obteniendo obsequios",
      icono: <i class="fa-solid fa-recycle"></i>,
      proposito: "Fomentar la conciencia ambiental y el trabajo colaborativo a través de campañas de reciclaje por grados",
      datos: [
        "Inversión: Baja",
        "Tiempo: Medio",
        "Mentores: Alumnos voluntarios que mostrarán las acciones realizadas para animar a otros estudiantes a unirse.",
        "Eficiencia: Los estudiantes desarrollarán conciencia y conocimiento sobre el medio ambiente.",
        "Motivación: Los estudiantes estarán motivados al reutilizar objetos y acumular puntos para ganar obsequios.",
        "Interacción: Mejorarán sus habilidades de interacción y socialización mediante la coordinación del reciclaje, fortaleciendo el trabajo en equipo.",
        "Desarrollo de ideas: Los estudiantes compartirán ideas y desarrollarán metas comunes.",
        "Identificación de objetos contaminantes: Los estudiantes aprenderán a identificar objetos contaminantes y buscarán reciclar y renovar objetos de manera creativa."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Promocionar concursos Temáticos elaborados por materiales reciclados",
      icono: <i class="fa-solid fa-tree"></i>,
      proposito: "Fomentar la creatividad y el buen uso de materiales reciclados a través de concursos temáticos",
      datos: [
        "Inversión: Baja",
        "Tiempo: Bajo",
        "Mentores: Alumnos voluntarios",
        "Eficiencia: Los estudiantes desarrollarán su imaginación y aprenderán a utilizar adecuadamente materiales reciclados.",
        "Entretenimiento: Los estudiantes se divertirán creando objetos nuevos a partir de materiales reciclados.",
        "Uso eficiente de objetos: Aprenderán a reutilizar objetos reciclados para otras actividades.",
        "Creatividad y pasatiempos: Mejorarán su creatividad y descubrirán nuevos pasatiempos.",
        "Concursos temáticos: Los estudiantes aprenderán los múltiples usos de los materiales reciclados y aumentarán su motivación para alcanzar sus metas."
      ],
      activo: false,
      progreso: null
    },

    {
      nombre: "Museo Escolar Voluntariado",
      icono: <i class="fa-solid fa-landmark"></i>,
      proposito: "Creación de un museo escolar a través de la colaboración voluntaria de estudiantes",
      datos: [
        "Inversión: Baja-Media - Tiempo: Alto",
        "Participación: Los estudiantes podrán contribuir con proyectos o colecciones personales para la exhibición.",
        "Fomento cultural: Este museo permitirá explorar temas históricos, científicos o de arte que enriquecen el aprendizaje escolar.",
        "Desarrollo de habilidades sociales: Los estudiantes aprenderán a colaborar y organizar eventos.",
        "Educación alternativa: Se fomenta el aprendizaje visual y práctico, complementando las enseñanzas tradicionales.",
        "Visibilidad y reconocimiento: Los estudiantes tendrán un espacio para mostrar sus trabajos y talentos.",
        "Ambiente enriquecedor: La presencia del museo escolar añade valor al ambiente educativo, estimulando el interés y la curiosidad de toda la comunidad.",
        "Organización de eventos: Se pueden organizar eventos de apertura para nuevas exhibiciones con invitación a familiares y amigos."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Nuevo Diseño de Tachos para Aulas",
      icono: <i class="fa-solid fa-recycle"></i>,
      proposito: "Implementación de un diseño atractivo para los tachos de basura en las aulas para promover el reciclaje",
      datos: [
        "Inversión: Baja - Tiempo: Bajo",
        "Diseño inclusivo: Los tachos estarán diseñados para diferenciar tipos de residuos (papel, plástico, orgánico).",
        "Conciencia ambiental: Fomenta la separación de residuos desde temprana edad, promoviendo una cultura de reciclaje.",
        "Estudiantes como agentes de cambio: Los alumnos participan en el diseño y decoración de los tachos, fortaleciendo su compromiso ambiental.",
        "Ambiente limpio y ordenado: Facilita la disposición correcta de los residuos, mejorando la limpieza de las aulas.",
        "Educación continua: Carteles informativos sobre tipos de desechos y su impacto ambiental estarán disponibles cerca de los tachos.",
        "Incentivo al orden: Un sistema de puntos puede ser implementado para aulas que mantengan los tachos organizados.",
        "Creatividad y personalización: Los tachos pueden ser decorados con diseños personalizados por los estudiantes, reflejando la identidad de cada aula."
      ],
      activo: false,
      progreso: null
    },
    {
      nombre: "Clean & Green Challenge",
      icono: <i class="fa-solid fa-toilet"></i>,
      proposito: "Fomentar la limpieza y el mantenimiento de los baños escolares mediante concursos",
      datos: [
        "Costo: Bajo",
        "Tiempo: Medio",
        "Descripción: Incentivar a los estudiantes a mantener los baños limpios a través de un sistema de premios y reconocimiento.",
        "Promover hábitos de higiene: Se fomenta la responsabilidad y el cuidado en el uso de espacios comunes.",
        "Premios e incentivos: Los estudiantes pueden ganar premios como un 'Día sin uniforme', material educativo o puntos extra."
      ],
      activo: false,
      progreso: null
}

  ])

  return(
    <ThemeContext.Provider value={modal}>
      <div className='inicio-4'>
        <div className='imagen'></div>
        <div className='information' ref={mainRef}>
          <h1>Propuestas</h1>
          <div className='propuestas-section'>
            {propuestas.map((element, index) => (
              <div
                key={index} // Agregar una key única
                className='propuestas'
                ref={mainRef1}
                onClick={() => {
                  setModal(element); // Establece el modal cuando se hace clic
                }}
              >
                <div className='show-section'>
                  <h3>{element.nombre}{element.icono}</h3>
                </div>
              </div>
            ))}
          </div>
          <Modal closeModal={()=>setModal(null)}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )

}

const Modal = ({closeModal}) => {

  let modalQuery = useContext(ThemeContext)

  if (modalQuery) {
    return (
      <div className='modal-section'>
        <div className='background'></div>
        <button onClick={closeModal}>X</button>
        <div className='information'>
          <h2>{modalQuery.nombre}</h2> {/* Muestra el nombre de la propuesta en el modal */}
          <h3>{modalQuery.proposito}</h3> {/* Muestra el propósito de la propuesta */} 
          <section>
            <ul>
              {modalQuery.datos.map((element)=> (
                <li>{element}</li>
              ))}
            </ul>
          </section>     
        </div>
      </div>
    );
  }

  return null
}

const Home = () => {
  return(
    <div className='inicio'>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
    </div>
  )
};

export default Home;

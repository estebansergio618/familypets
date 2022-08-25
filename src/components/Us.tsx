import React, { useState } from "react";
import circleDog from "../assets/images/circledog.png";
import circleCat from "../assets/images/circlecat.png";
const Us = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const text: string = `s`;
  return (
    <section className="us">
      <div className="us__hero" />
      <div className="us__presentation">
        <h2 className="us__h2">¿Quiénes Somos?</h2>
        <p className="us__text">
          La Clínica Veterinaria Family Pets está conformado por un equipo de
          profesionales en el área de medicina veterinaria, estética de mascotas
          y atención al cliente, todos comprometidos con el bienestar de su
          mascota.
        </p>
      </div>
      <div className="us__values">
        <div className="us__card">
          {/* <div className="us__info"> */}
          <h3 className="us__h2">Misión</h3>
          <img className="us__image" src={circleDog} alt="dog" />
          <p className="us__text">
            Somos un grupo de profesionales pensando en el bienestar de tu
            mascota y de la familia, brindando servicios médicos veterinarios de
            alto nivel, con calidez humana y calidad técnica, dando todos los
            servicios complementarios en un mismo lugar para mayor seguridad y
            satisfacción del cliente.
          </p>
          {/* </div> */}
        </div>
        <div className="us__card">
          {/* <div className="us__info"> */}
          <h3 className="us__h2">Visión</h3>
          <img
            className="us__image us__image-reverse"
            src={circleCat}
            alt="dog"
          />
          <p className="us__text">
            Ser líder en la prestación de servicios médicos veterinarios de la
            mejor calidad y eficiencia. Mejorando continuamente a través de
            capacitaciones del personal e innovación de equipos para así dar
            mayor y mejor servicio a nuestras mascotas y ayudando a sus dueños a
            darles mejores cuidados y recomendaciones
          </p>
          {/* </div> */}
        </div>
        <div className="us__card">
          {/* <div className="us__info"> */}
          <h3 className="us__h2">Valores</h3>
          <img className="us__image" src={circleDog} alt="dog" />
          <p className={showMore ? "us__text" : "us__text us__text--overflow"}>
            Los valores éticos y profesionales son muy importante para nosotros
            entre los que podemos mencionar: <br />
            <br /> AMOR: <br />
            <br />
            Es nuestro valor fundamental y el principio de todo cambio social.
            Los animales de compañía traen amor y felicidad a los hogares y
            nosotros ayudamos para fortalecerlo. <br />
            <br />
            RESPONSABILIDAD:
            {showMore ? (
              <>
                <br></br>
                <br></br> Usando la medicina preventiva como herramienta para
                promover la salud, es nuestra responsabilidad mantener sano al
                animal de compañía y a toda su familia. <br></br>
                <br></br>
                CLARIDAD:
                <br></br>
                <br></br> Desarrollamos un lenguaje simple y claro. Nos tomamos
                el tiempo de explicarle cada proceso, para garantizar su
                comprensión y mantener su confianza. <br></br>
                <br></br>
                RESPETO:
                <br></br>
                <br></br> Cumplimos con nuestra responsabilidad, somos
                coherentes con nuestros valores y sabemos que usted es quien
                decide sobre el bienestar de su mascota, nosotros respetamos su
                decisión.
              </>
            ) : null}
          </p>
          {showMore ? (
            <button className="us__button" onClick={() => setShowMore(false)}>
              MOSTRAR MENOS{" "}
              <span className="material-symbols-outlined">expand_less</span>
            </button>
          ) : (
            <button className="us__button" onClick={() => setShowMore(true)}>
              MOSTRAR MÁS
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          )}
          {/* </div> */}
        </div>
        <div className="us__card">
          {/* <div className="us__info"> */}
          <h3 className="us__h2">Política de calidad</h3>
          <img
            className="us__image us__image-reverse"
            src={circleCat}
            alt="dog"
          />
          <p className="us__text">
            🐾 Nuestras políticas son el conjunto de leyes que nos ayudan a
            crear nuestra misión.Cada veterinario guarda la Ética profesional
            frente a otro colega y frente a cada mascota, siguiendo los
            lineamientos dictados por el Colegio Veterinario del Perú. Debemos
            “saber hacer”, pero también debemos saber delegar lo que no pueda o
            sepa resolver.
          </p>
          <p className="us__text">
            🐾 Cuidar el medio ambiente y proteger a los miembros de la
            comunidad (tanto humanos o mascotas) de los riesgos que presentan
            animales enfermos.
          </p>
          <p className="us__text">🐾 Cordialidad y comprensión</p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Us;

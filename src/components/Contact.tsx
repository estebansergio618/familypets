import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import wsp from "../assets/icons/whatsapp.svg";
import fb from "../assets/icons/facebook.svg";
import inst from "../assets/icons/instagram.svg";
const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__wrapper">
          <div className="contact__info">
            <p className="contact__title">Contacta con nosotros</p>
            <p className="contact__text">
              <b>Atendemos todos los días de 07:00 a 00:00</b>
              <br />
              Siéntete libre de entrar en contacto con cualquier duda o
              sugerencia que tengas.
            </p>
            <div className="contact__card">
              <span className="contact__icon material-symbols-outlined">
                call
              </span>
              <p>
                993485130
                <br />
                (01)3835551
              </p>
            </div>
            <div className="contact__card">
              <span className="contact__icon material-symbols-outlined">
                map
              </span>
              <p>
                Jiron Guardia Civil Sur 500
                <br />
                Mz B Lot 4 <br />
                Santiago de Surco 15054
              </p>
            </div>
            <div className="contact__card">
              <span className="contact__icon material-symbols-outlined">
                mail
              </span>
              <p>clinicafamilypets@gmail.com</p>
            </div>
            <div className="contact__social">
              <a
                className="contact__social-link"
                href="https://wa.me/51993485130"
                target="_blank"
              >
                <img
                  className="contact__social-logo"
                  src={wsp}
                  alt="whatsapp icono"
                />
              </a>
              <a
                className="contact__social-link"
                href="https://www.facebook.com/clinicafamilypets/"
                target="_blank"
              >
                <img
                  className="contact__social-logo"
                  src={fb}
                  alt="facebook icono"
                />
              </a>
              <a
                className="contact__social-link"
                href="https://instagram.com/vet.familypets?igshid=1d2zjz5s718oj "
                target="_blank"
              >
                <img
                  className="contact__social-logo"
                  src={inst}
                  alt="instagram icono"
                />
              </a>
            </div>
          </div>
          <div className="contact__map">
            <MapContainer
              center={[-12.167292980976022, -76.99066279052947]}
              zoom={23}
              scrollWheelZoom={true}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-12.167292980976022, -76.99066279052947]}>
                <Popup>Clínica veterinaria Family Pets</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__wrapper">
          <div className="contact__info">
            <p className="contact__title">Contacta con nosotros</p>
            <p className="contact__text">
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
                Av. Guardia Civil Sur 600
                <br />
                Piso 1<br />
                Lima 15056
                <br />
              </p>
            </div>
            <div className="contact__card">
              <span className="contact__icon material-symbols-outlined">
                mail
              </span>
              <p>clinicafamilypets@gmail.com</p>
            </div>
          </div>
          <div className="contact__map">
            <MapContainer
              center={[-12.167292980976022, -76.99066279052947]}
              zoom={23}
              scrollWheelZoom={false}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-12.167292980976022, -76.99066279052947]}>
                <Popup>
                Clínica veterinaria Family Pets
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

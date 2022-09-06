import React, { useRef } from "react";

export const ReserverModal = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  // TICKET NUMBER ARMED BY FAMILY PETS CONVENTION
  const createTicketNumber = (): string => {
    let today: Date = new Date();
    let hour: string = today.getHours().toString();
    let min: string = today.getMinutes().toString();
    let seg: string = today.getSeconds().toString();
    let day: string = today.getDate().toString();
    let month: string = today.getMonth().toString();
    let year: string = today.getFullYear().toString();

    return hour + min + seg + day + month + year;
  };

  return (
    <div className="reservermodal__background">
      <div className="reservermodal">
        {/* TITLE AND NUMBER TICKET */}
        <div className="reservermodal__nav">
          <p>RESERVA ONLINE - {createTicketNumber()}</p>
          <button
            className="reservermodal__close material-symbols-outlined"
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            close
          </button>
        </div>

        {/* BODY RESERVE MODAL */}
        <div>
          {/* CLIENT DATA  */}
          <label htmlFor="name-reserve-modal">Nombre</label>
          <input type="text" id="name-reserve-modal" ref={nameRef} />
          <label htmlFor="pet-reserve-modal">Mascota</label>
          <input type="text" id="pet-reserve-modal" />
          <label htmlFor="race-reserve-modal">Raza</label>
          <input type="text" id="race-reserve-modal" />

          {/* APPOINTMENT SCHEDULED FOR THE */}
          <label htmlFor="date-reserve-modal">Fecha</label>
          <input type="date" id="date-reserve-modal" />
          <label htmlFor="hour-reserve-modal">Hora</label>
          <input type="time" id="hour-reserve-modal" />
          {/*  ORDERS MATRIX */}

          {/* AREA */}
          <div>
            <p>Area</p>
            <select name="Lista de pedidos" id="">
              <option value="">--</option>
              <option value="">Clínica</option>
              <option value="">Grooming</option>
              <option value="">Hospedaje</option>
            </select>
          </div>

          {/* PRODUCTS OF THE CORRESPONDING AREA */}
          <div>
            {/* CARGAMOS TODA LA LISTA DE PEDIDOS */}
            <div>
              <p>Descripción</p>

              {/* COMBOX */}
              <select name="Lista de pedidos" id="">
                <option value="">--</option>
                <option value="">three dogs canino 3KG</option>
              </select>

              {/* BOTONES DE AGREGADO Y ELIMINADO */}
              <button>Agregar</button>
              <button>Eliminar</button>
            </div>

            {/* ALMACENAMOS LOS PEDIDOS SELECCIONADOS POR EL CLIENTE */}
            <div>
              <select name="Almacenamiento de pedidos" id="" size={11}>
                <option value="">1° PEDIDO REALIZADO POR EL CLIENTE</option>
                <option value="">2° PEDIDO REALIZADO POR EL CLIENTE</option>
              </select>
            </div>
          </div>

          {/* ENVIAR WSP */}
          <div>
            <button>ENVIAR</button>
          </div>
        </div>

        {/* TERMNS AND CONDITIONS */}
        <div>
          <p>Terminos</p>
          <p>
            La confirmación de su pedido será realizada una vez enviado el
            whatsapp por el counter encargado de su atención.
          </p>
        </div>
      </div>
    </div>
  );
};

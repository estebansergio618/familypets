import React, { useState } from "react";
import { FormInputsInterface } from "../types";
import FormInputs from "./FormInputs";
import { useForm, SubmitHandler, appendErrors } from "react-hook-form";

enum AreaEnum {
  clinica = "Clínica",
  grooming = "Grooming",
  hospedaje = "Hospedaje",
}
interface Props {
  setShow: (value: boolean) => void;
}

interface FormInputs {
  name: String;
  pet: String;
  breed: String;
  date: String;
  hour: String;
  area: AreaEnum;
}

export const ReserverModal = ({ setShow }: Props) => {
  const { register, handleSubmit,watch, formState: {errors} } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data):void => {
    // once we have the info, proceed to build the message
    let message:string = ""
    let today: Date = new Date();
    let time: Number = today.getHours();
    
    if (0 <= time && time < 12) {
      message = "Buenos días Family Pets👋, ";
    } else if (12 <= time && time < 18) {
      message = "Buenas tardes Family Pets👋, ";
    } else {
      message = "Buenas noches Family Pets👋, ";
    }
  };
  // TICKET NUMBER ARMED BY FAMILY PETS CONVENTION
  const [values, setValues] = useState({});
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

  const correctHour = (hour: String): boolean => hour > "07" && hour < "22"; // check if the selected hour is the working range
  return (
    <div className="reservermodal__background">
      <div className="reservermodal">
        {/* TITLE AND NUMBER TICKET */}
        <div className="reservermodal__nav">
          <p>RESERVA ONLINE - {createTicketNumber()}</p>
          <button
            className="reservermodal__close material-symbols-outlined"
            onClick={() => setShow(false)}
          >
            close
          </button>
        </div>
        <form className="reservermodal__form" onSubmit={handleSubmit(onSubmit)}>
          <label className="reservermodal__label" htmlFor="name-reserve-modal">Nombre</label>
          <input className="reservermodal__input" placeholder="Juan Pérez" id="name-reserve-modal" type="text" {...register("name",{ required: true, pattern: /^[A-Za-z\s]{3,50}$/i , maxLength: 50, minLength: 2 })} />
          {errors.name && <span className="reservermodal__error">Nombre debe tener más de 3 caracteres y no debe contener números ni caracteres especiales</span>}
          <label className="reservermodal__label" htmlFor="pet-reserve-modal">Mascota</label>
          <input className="reservermodal__input" placeholder="Firulais" id="pet-reserve-modal" type="text" {...register("pet",{ required: true, pattern: /^[A-Za-z\s]{3,50}$/i , maxLength: 50, minLength: 2 })} />
          {errors.pet && <span className="reservermodal__error">Mascota debe tener más de 3 caracteres y no debe contener números ni caracteres especiales</span>}
          <label className="reservermodal__label" htmlFor="breed-reserve-modal">Raza</label>
          <input className="reservermodal__input" placeholder="Border Collie" id="breed-reserve-modal" type="text" {...register("breed",{ required: true, pattern: /^[A-Za-z\s]{3,50}$/i , maxLength: 50, minLength: 2 })} />
          {errors.breed && <span className="reservermodal__error">Raza debe tener más de 3 caracteres y no debe contener números ni caracteres especiales</span>}
          <label className="reservermodal__label" htmlFor="date-reserve-modal">Fecha</label>
          <input className="reservermodal__input" id="date-reserve-modal" type="date" min={`${new Date().toLocaleDateString("en-CA")}`} {...register("date", {required: true, min: `${new Date().toLocaleDateString("en-CA")}`})} />
          {errors.date && <span className="reservermodal__error">Debe seleccionar una fecha igual o posterior al día de hoy</span>}
          <label className="reservermodal__label" htmlFor="hour-reserve-modal">Hora</label>
          <input className="reservermodal__input" id="hour-reserve-modal" type="time"{...register("hour", {required: true, validate: correctHour})} />
          { errors.hour?.type === "validate" && <span className="reservermodal__error">Debe seleccionar una hora entre las 07:00 y 22:00</span>}
          { errors.hour && <span className="reservermodal__error">Debe seleccionar una hora entre las 07:00 y 22:00</span>}
          <label className="reservermodal__label" htmlFor="area-reserve-modal">Area</label>
          <select className="reservermodal__input"  id="area-reserve-modal" {...register("area")}>
            <option value="clinica">Clínica</option>
            <option value="grooming">Grooming</option>
            <option value="hospedaje">Hospedaje</option>
          </select>

          {/* <section className="reservermodal__input-container">
            <div>
              <label
                className="reservermodal__label"
                htmlFor="description-reserve-modal"
              >
                Descripción
              </label>
              <select
                className="reservermodal__input"
                name="Lista de pedidos"
                id="description-reserve-modal"
              >
                <option value="">--</option>
                <option value="">three dogs canino 3KG</option>
              </select>
            </div>

            <button className="reservermodal__button--add material-symbols-outlined">
              add
            </button>
          </section> */}

          <fieldset className="reservermodal__disclaimer">
            <legend className="reservermodal__disclaimer-title">
              Terminos
            </legend>
            <p className="reservermodal__disclaimer-text">
              La confirmación de su pedido será realizada una vez enviado el
              whatsapp por el counter encargado de su atención.
            </p>
          </fieldset>
          <button className="reservermodal__button">ENVIAR</button>
        </form>
      </div>
    </div>
  );
};

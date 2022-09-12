import React from "react";
import { FormInputsInterface } from "../types";
interface Props {
  input: FormInputsInterface;
}
const FormInputs = ({ input }: Props) => {
  return (
    <>
      <label className="reservermodal__label" htmlFor={input.id}>
        {input.name}
      </label>
      {input.type === "select" ? (
        <select
          className="reservermodal__input"
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          required={input.required}
        >
          {input.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="reservermodal__input"
          id={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          required={input.required}
          min={input?.min}
          max={input?.max}
        />
      )}
      <span className="reservermodal__error">{input.errorMessage}</span>
    </>
  );
};

export default FormInputs;

import  { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReserverContext } from "../context/ReserverContext";
import data from "../utils/reserverJSON.json";
import { sendWSP } from "../utils/sendWSP";

enum AreaEnum {
  clinica = "Clínica",
  grooming = "Grooming",
  hospedaje = "Hospedaje",
}
interface AreasData {
  area: string;
  name: string;
  id: string;
}
interface FormInputs {
  name: String;
  pet: String;
  breed: String;
  date: String;
  hour: String;
  area: AreaEnum;
  services: AreasData[];
}

export const ReserverModal = () => {
  const reserverContext = useContext(ReserverContext);
  const [search, setSearch] = useState<{ search: string; option: string }>({
    search: "",
    option: "baño y peluqueria",
  });
  const [results, setResults] = useState<Array<AreasData>>([]);
  const [added, setAdded] = useState<Array<AreasData>>([]);
  const formData: any = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data): void => {
    const allData = { ...data, services: added };
    sendWSP(allData);
  };

  const handleAdd = (element: AreasData): void => {
    setAdded(added.concat(element));
  };
  const handleRemove = (element: AreasData): void => {
    const elementIndex = added.findIndex((item) => item.id === element.id);
    const newElements = [...added];
    newElements.splice(elementIndex, 1);
    setAdded(newElements);
  };

  const handleResults = (): void => {
    let searchedResults: Array<AreasData> = [];
    /// here we define the search by category, todo, vacunas, etc
    if (search.option === "todo") {
      let allAreas: Array<AreasData> = [];
      for (let area of formData) {
        allAreas = allAreas.concat(area[Object.keys(area)[0]]);
      }
      searchedResults = allAreas;
    } else {
      for (let area of formData) {
        if (search.option === Object.keys(area)[0]) {
          searchedResults = area[search.option];
        }
      }
    }
    /// define the search by input
    if (search.search.length > 1) {
      searchedResults = searchedResults.filter((element) => {
        const resultName = element.name.toLowerCase();
        const searchName = search.search.toLowerCase();
        return resultName.includes(searchName);
      });
    }
    /// check if the array of elements contain an already added element
    /// if so, we remove it from the result list

    for (let element of added) {
      const elementIndex = searchedResults.findIndex(
        (item) => item.id === element.id
      ); // if doesnt find anything, will return -1

      if (elementIndex !== -1) {
        const newSearchResults = [...searchedResults];
        newSearchResults.splice(elementIndex, 1);
        searchedResults = newSearchResults;
      }
    }

    setResults(searchedResults);
  };

  const handleSearch = (value: string): void => {
    setSearch((prevState) => {
      return { ...prevState, search: value };
    });
  };

  const handleSearchSelect = (value: string): void => {
    setSearch((prevState) => {
      return { ...prevState, option: value };
    });
  };

  const correctHour = (hour: String): boolean => hour > "07" && hour < "22"; // check if the selected hour is the working range

  useEffect(() => {
    handleResults();
    // eslint-disable-next-line 
  }, [search, added]);

  return (
    <div className="reservermodal__background">
      <div className="reservermodal">
        <div className="reservermodal__nav">
          <p>RESERVA ONLINE</p>
          <button
            className="reservermodal__close material-symbols-outlined"
            onClick={() => reserverContext?.setShowReserverModal(false)}
          >
            close
          </button>
        </div>
        <form className="reservermodal__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="reservermodal__input-container">
            <div>
              <label
                className="reservermodal__label"
                htmlFor="name-reserve-modal"
              >
                Nombre*
              </label>
              <input
                className="reservermodal__input"
                placeholder="Juan Pérez"
                id="name-reserve-modal"
                type="text"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z\s]{3,50}$/i,
                  maxLength: 50,
                  minLength: 2,
                })}
              />
              {errors.name && (
                <span className="reservermodal__error">
                  Nombre debe tener más de 3 caracteres y no debe contener
                  números ni caracteres especiales
                </span>
              )}
            </div>
            <div>
              <label
                className="reservermodal__label"
                htmlFor="pet-reserve-modal"
              >
                Mascota*
              </label>
              <input
                className="reservermodal__input"
                placeholder="Firulais"
                id="pet-reserve-modal"
                type="text"
                {...register("pet", {
                  required: true,
                  pattern: /^[A-Za-z\s]{3,50}$/i,
                  maxLength: 50,
                  minLength: 2,
                })}
              />
              {errors.pet && (
                <span className="reservermodal__error">
                  Mascota debe tener más de 3 caracteres y no debe contener
                  números ni caracteres especiales
                </span>
              )}
            </div>
          </div>
          <label className="reservermodal__label" htmlFor="breed-reserve-modal">
            Raza*
          </label>
          <input
            className="reservermodal__input"
            placeholder="Border Collie"
            id="breed-reserve-modal"
            type="text"
            {...register("breed", {
              required: true,
              pattern: /^[A-Za-z\s]{3,50}$/i,
              maxLength: 50,
              minLength: 2,
            })}
          />
          {errors.breed && (
            <span className="reservermodal__error">
              Raza debe tener más de 3 caracteres y no debe contener números ni
              caracteres especiales
            </span>
          )}
          <div className="reservermodal__input-container">
            <div>
              <label
                className="reservermodal__label"
                htmlFor="date-reserve-modal"
              >
                Fecha*
              </label>
              <input
                className="reservermodal__input"
                id="date-reserve-modal"
                type="date"
                min={`${new Date().toLocaleDateString("en-CA")}`}
                {...register("date", {
                  required: true,
                  min: `${new Date().toLocaleDateString("en-CA")}`,
                })}
              />
              {errors.date && (
                <span className="reservermodal__error">
                  Debe seleccionar una fecha igual o posterior al día de hoy
                </span>
              )}
            </div>
            <div>
              <label
                className="reservermodal__label"
                htmlFor="hour-reserve-modal"
              >
                Hora*
              </label>
              <input
                className="reservermodal__input"
                id="hour-reserve-modal"
                type="time"
                {...register("hour", { required: true, validate: correctHour })}
              />
              {errors.hour?.type === "validate" && (
                <span className="reservermodal__error">
                  Debe seleccionar una hora entre las 07:00 y 22:00
                </span>
              )}
              {errors.hour && (
                <span className="reservermodal__error">
                  Debe seleccionar una hora entre las 07:00 y 22:00
                </span>
              )}
            </div>
          </div>
          <label className="reservermodal__label" htmlFor="area-reserve-modal">
            Area*
          </label>
          <select
            className="reservermodal__input"
            id="area-reserve-modal"
            defaultValue={"grooming"}
            {...register("area")}
          >
            <option value="clinica">Clínica</option>
            <option value="grooming">Grooming</option>
            <option value="hospedaje">Hospedaje</option>
          </select>

          <section className="reservermodal__description">
            <div>
              <label
                className="reservermodal__label"
                htmlFor="description-reserve-modal"
              >
                Descripción
              </label>
              <div className="reservermodal__input reservermodal__input--custom">
                <input
                  className="reservermodal__input--search"
                  name="Lista de pedidos"
                  id="description-reserve-modal"
                  placeholder="baño antipulgas"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <span className="reservermodal__input--search-icon material-symbols-outlined">
                  search
                </span>
              </div>
            </div>

            <select
              className="reservermodal__input reservermodal__input--small"
              name="Descripcion Area"
              id="description-area-reserve-modal"
              onChange={(e) => handleSearchSelect(e.target.value)}
              defaultValue={search.option}
            >
              <option value="todo">Todo</option>
              <option value="antiparasitario - antipulgas">
                Antiparasitario - Antipulgas
              </option>
              <option value="baño y peluqueria">Baño y Peluqueria</option>
              <option value="examenes">Examenes</option>
              <option value="servicios veterinarios">
                Servicios Veterinarios
              </option>
              <option value="vacunas">Vacunas</option>
            </select>
          </section>
          <fieldset className="reservermodal__search-box">
            <legend className="reservermodal__search-legend">
              Resultados:<b> {results.length} </b>
            </legend>
            {results.map((result) => (
              <span className="reservermodal__search-item" key={result.id}>
                <p className="reservermodal__search-text">{result.name}</p>
                <span
                  className="reservermodal__search-add material-symbols-outlined"
                  onClick={() => handleAdd(result)}
                >
                  add
                </span>
              </span>
            ))}
          </fieldset>
          {added.length > 0 ? (
            <fieldset className="reservermodal__search-box">
              <legend className="reservermodal__search-legend">
                Agregados:<b> {added.length} </b>
              </legend>

              {added.map((element) => (
                <span className="reservermodal__search-item" key={element.id}>
                  <p className="reservermodal__search-text">{element.name}</p>
                  <span
                    className="reservermodal__search-add reservermodal__search-add--remove material-symbols-outlined"
                    onClick={() => handleRemove(element)}
                  >
                    remove
                  </span>
                </span>
              ))}
            </fieldset>
          ) : null}
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

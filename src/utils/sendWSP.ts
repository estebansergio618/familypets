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
export const sendWSP = (data: FormInputs): void => {
  // the date comes like "2022-09-15"
  // we need to transfor it to something like this => 13 de septiembre
  const months: string[] = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  let infoDate: any = data.date.split("-"); // [ "2022", "09", "15" ]
  let dayNumber: string = infoDate[2];
  let monthName: string = months[Number(infoDate[1] - 1)]; // new we have "septiembre"
  // once we have the info, proceed to build the message
  let ticketNumber = createTicketNumber();
  let greeting: string = "";
  let message: string = `Soy ${data.name}, me gustaría agendar una cita en el área de ${data.area} para el día ${dayNumber} de ${monthName} a las ${data.hour} 📅, mi mascota se llama ${data.pet} y es de raza ${data.breed} 🐶`;
  let servicesMessage: string = "";
  let final: string = ` mi número de ticket es ${ticketNumber}, espero su respuesta 👋.`;
  let today: Date = new Date();
  let time: Number = today.getHours();

  // first we define the greetings
  if (0 <= time && time < 12) {
    greeting = "Buenos días Family Pets👋, ";
  } else if (12 <= time && time < 18) {
    greeting = "Buenas tardes Family Pets👋, ";
  } else {
    greeting = "Buenas noches Family Pets👋, ";
  }

  // here we define the services messages

  if (data.services.length === 1) {
    servicesMessage = `%0a Me gustaría el servicio de ${data.services[0].name}, `;
  } else if (data.services.length > 1) {
    servicesMessage = `%0a Me gustarían los siguientes servicios: `;
    data.services.map((service) => {
      servicesMessage += `${service.name}, `;
    });
  }
  window.open(
    `https://api.whatsapp.com/send?phone=1162353123&text=${
      greeting + message + servicesMessage + final
    }`,
    "_blank"
  );
};

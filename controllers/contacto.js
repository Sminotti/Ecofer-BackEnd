import { send } from "./../services/mail.js";
const mail = "msmdesarrolloinformatico@gmail.com";

const sendEmail = async (req, res) => {
  try {
    const {
      nombreContacto,
      apellidoContacto,
      emailContacto,
      telContacto,
      message,
      localidad,
      barrio,
      codigoPostal,
    } = req.body;
    const contactoObjet = {
      mail,
      subject: "Consulta desde contacto Ecofer ",
      message: `
<ul>
    <li>email:    ${emailContacto}</li>
    <li>nombre:   ${nombreContacto}</li>
    <li>Apellido: ${apellidoContacto}</li>
    <li>Telefono: ${telContacto}</li> 
    <li>Localidad: ${localidad}</li> 
    <li>barrio:   ${barrio}</li> 
    <li>codigoPostal: ${codigoPostal}</li> 
  </ul>  
  <p>Consulta: ${message}</p>
`,
    };

    await send(contactoObjet);

    console.log("consulta enviada desde: ", emailContacto);
    console.log(contactoObjet);
  } catch (error) {
    console.log(error);
  }
};
export { sendEmail };

import {get,create as createTareas,del as delTareas} from "../../models/tareas.js";

const allTarea = async (req, res) => {
  try {
    const listaTareas = await get(); // [{}]
 
    res.json(listaTareas);
  } catch (error) {
    console.log(error);
  }
};

const createTarea = async (req, res) => {
  createTareas(req.body)
    .then((resultado) => console.log("Tarea creada exitosamente",resultado))
    .catch((e) => console.log(e));

    res.json({
      body: req.body,
      estado: "succes",
      message: "Tarea creada exitosamente",
    });

}

const delTarea = async (req, res) => {
  try {
    const { id } = req.params;
    await delTareas(id);

    res.json({
      estado: "succes",
      message: "Tarea eliminada",
    });
  } catch (error) {
    console.log(error);
  }
};


export {allTarea,createTarea,delTarea};
import {
  get as getTareas,
  create as createTareas,
  del as delTareas,
} from "../../models/tareas.js";

import { get as getClientes } from "../../models/clientes.js";

const all = async (req, res) => {
  try {
    const listaTareas = await getTareas(); // [{}]
    const listaClientes = await getClientes();

    console.log("Lista de tareas: ", listaTareas);
    console.log("Lista de clientes: ", listaClientes);

    res.json(listaTareas, listaClientes);
  } catch (error) {
    console.log(error);
  }
};

const createTarea = async (req, res) => {
  createTareas(req.body)
    .then((resultado) => console.log("Tarea creada exitosamente", resultado))
    .catch((e) => console.log(e));

  res.json({
    body: req.body,
    estado: "succes",
    message: "Tarea creada exitosamente",
  });
};

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

export { all, createTarea, delTarea };

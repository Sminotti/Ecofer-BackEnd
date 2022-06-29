import model from "../../models/tareas";

const allTarea = async (req, res) => {
  try {
    const listaTareas = await model.get(); // [{}]
 
    res.json(listaTareas);
  } catch (error) {
    console.log(error);
  }
};

const createTarea = async (req, res) => {
  model
    .create(req.body)
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
    await model.del(id);

    res.json({
      estado: "succes",
      message: "Tarea eliminada",
    });
  } catch (error) {
    console.log(error);
  }
};


export default{allTarea,createTarea,delTarea};
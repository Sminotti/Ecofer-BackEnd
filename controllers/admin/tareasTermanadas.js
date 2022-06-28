const model = require ("../../models/tareasTerminadas");

const allTerminada = async (req, res) => {
    try {
      const listaTerminada = await model.get(); // [{}]
  
     
      res.json(listaTerminada);
   
    } catch (error) {
     
      console.log(error);
    }
  
  };

  const createTerminada = async (req, res) => {
    model
    .create(req.body)
    .then((resultado) => console.log("se creo exitosamente"))
    .catch((e) => console.log(e));
    
    res.json({
      body: req.body,
      estado: "Terminada",
    });
  };
  
  const delTerminada = async (req, res) => {
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

  module.exports={createTerminada,delTerminada,allTerminada};
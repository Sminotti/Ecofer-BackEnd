const model = require ("../../models/tareasProceso");


const allProceso = async (req, res) => {
    try {
     
      const listaProceso = await get(); // [{}]
   
     
      res.json(listaProceso);
   
    } catch (error) {
     
      console.log(error);
    }
  
  };

  const createProceso = async (req, res) => {
    
    model
    .create(req.body)
    .then((resultado) => console.log("se creo exitosamente"))
    .catch((e) => console.log(e));
    
    res.json({
      body: req.body,
      estado: "proceso",
    });
  };
  
  const delProceso = async (req, res) => {
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

  module.exports={createProceso,delProceso,allProceso};
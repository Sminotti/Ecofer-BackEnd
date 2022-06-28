const all = (req, res, next) => {
    console.log("about");
   
      res.render("about", { title: "about" });
    
  };
  
  
  module.exports = { all };

const all = (req, res, next) => {
    console.log("about");
   
      res.render("about", { title: "about" });
    
  };
  
  
  export { all };

class Rectangulo {
  constructor(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  }
  then(){

    this.resolve();
    
  }
}

rectangulo = new Rectangulo(
  () => {
    console.log("resolver");
  },
  () => {
    console.log("reject");
  }
);
// console.log(rectangulo.resolve);
 console.log("que es esto:",rectangulo.then());

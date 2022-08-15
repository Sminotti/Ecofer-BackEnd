class Rectangulo {
  constructor(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  }
  then(){

    this.resolve();
    
  }
}
// cambien de rectangulo con "r" minuscula a "R" mayuscula
Rectangulo = new Rectangulo(
  () => {
    console.log("resolver");
  },
  () => {
    console.log("reject");
  }
);
// console.log(rectangulo.resolve);
 console.log("que es esto:",Rectangulo.then());

 // 
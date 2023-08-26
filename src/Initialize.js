export default class Initialize {

  constructor() {
    let myArray = ["one", "two", "three"];
    
    myArray.forEach( (item)=>{

      console.log(item);

    } )




    console.log(this.myTest(3, 7));

  } // END constructor

  myTest(){

    let one = 1;
    let two = 2;

    let sum = one / two;

    return sum;


  }

} // END class
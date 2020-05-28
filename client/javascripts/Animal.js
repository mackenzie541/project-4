// jshint esversion: 6


//Class Types: Basic syntax
//https://javascript.info/class

//Class Types: Inheritance
//https://javascript.info/class-inheritance

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  //setter
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  //setter
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  //override the inherited method
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}


// Inherit from Animal
class Dog extends Animal {
  //your code goes here..
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }


  //override the inherited method
  stop() {
    super.stop(); // call parent stop
  }
}

let test_driver = () => {

  let test_rabbit = () => {
    let rabbit = new Rabbit("White Rabbit", 10);
    rabbit.run(5);
    rabbit.hide();
    rabbit.stop();
    console.log(rabbit.name);
    console.log(rabbit.earLength);
  };

  let test_dog = () => {
    let fang = new Dog("Fang", "Airedale", 50, "Woof");
    fang.run(20);
    console.log(`${fang.name} is an Airedale dog weighing 50 lbs. that can run ${fang.speed} mph.`);
    console.log(`Look, a cat! ${fang.name} barks: Woof Woof!`);
    fang.stop();
    console.log('Woof Woof!');
    const  zero = new Dog("Zero", "Beagle", 22, "Yip" );
    zero.run(10);
    console.log(`${zero.name} is a Beagle dog weighing 22 lbs. that can run ${zero.speed} mph.`);
    console.log(`Look, a cat! ${zero.name} barks: Yip Yip!`);
    zero.stop();
    console.log('Yip Yip!');

  };

  //run tests
  test_rabbit();
  test_dog();
};

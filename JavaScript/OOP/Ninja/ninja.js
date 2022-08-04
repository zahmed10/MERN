class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log("The ninja's name is " + this.name);
  }

  showStats() {
    console.log("Name: " + this.name + "\nStrength:" + this.strength
  + "\nSpeed: " + this.speed + "\nHealth: " + this.health);
  }

  drinkMatcha() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkMatcha();
ninja1.showStats();

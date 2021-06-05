/* 
todo
? Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small,
? with a fixed number of slots for each size.

* Implement the ParkingSystem class:

? ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. 
? The number of slots for each parking space are given as part of the constructor.
? bool addCar(int carType) Checks whether there is a parking space of carType for the car 
? that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, 
? which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType.
? If there is no space available, return false, else park the car in that size space and return true.

*/


/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {

  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar = (carType) => {
    switch (carType) {
      case 1:
        if(this.big >= 1) return this.big--
        else return false  
      case 2:
        if(this.medium >= 1) return this.medium--
        else return false  
      case 3:
        if(this.small >= 1) return this.small--
        else return false  
    }
  };
}

ParkingSystem = new ParkingSystem(1, 1, 0);

ParkingSystem.addCar(1);
ParkingSystem.addCar(1);
ParkingSystem.addCar(2);
ParkingSystem.addCar(2);

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

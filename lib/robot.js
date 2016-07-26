// 'use strict';

bearings = ['north', 'east', 'south', 'west']
changes = [1, 1, -1, -1]

 class Robot {
   constructor(coordinates, bearing) {
     this.coordinates = [0, 0]
     this.bearing = 'north'
   }   

  at(x,y) {
    this.coordinates[0] = x
    this.coordinates[1] = y    
  }

  orient(bearing) {
    if (bearings.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(object) {
    this.coordinates[0] = object['x']
    this.coordinates[1] = object['y'] 
    this.bearing = object['direction']
  }

  evaluate(arg) {
    this.instructions(arg)
  }

  turnRight() {
  var indicator = bearings.indexOf(this.bearing)
    indicator += 1
  this.bearing = bearings[indicator % 4]
  // return this.bearing
  }

  turnLeft() {
  var indicator = bearings.indexOf(this.bearing)
    indicator -= 1
    if (indicator === -1) { indicator = 3 }
  this.bearing = bearings[indicator % 4]
  // return this.bearing  
  }

  advance() {
  var indicator = bearings.indexOf(this.bearing)
  var change = changes[indicator]
  if (indicator % 2 === 0) {
    this.coordinates[1] += change
  } else {
    this.coordinates[0] += change
    }
  }

  instructions(arg) {
    let array = []
    for (var x = 0; x < arg.length; x++)
      if (arg[x] === "R") {
        this.turnRight()
        array.push("turnRight")
    } else if (arg[x] === "L") {
        this.turnLeft()
        array.push("turnLeft")
    } else if (arg[x] === "A") {
        this.advance()
        array.push("advance")
      }
      return array
  }

}

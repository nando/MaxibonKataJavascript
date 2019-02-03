"use strict"

// import Developer from "./Developer"
class Developer {
  constructor ( name, maxibons_to_grab ) {
    this.name = name;
    this.maxibons_to_grab = Math.max( 0, maxibons_to_grab );
  }

  maxibonsToGrab() {
    return this.maxibons_to_grab;
  }
}

const assert = require('assert');
const jsc = require('jsverify')

describe('Developer', () => {
  it('should always grab a positive number of maxibons', () => {
    jsc.assertForall( jsc.integer,
                      ( maxibons_to_grab ) => {
      const dev = new Developer( "Ada", maxibons_to_grab );
      return dev.maxibonsToGrab() >= 0
    })
  })

  it('should assign the name of the developer in construction', () => {
    jsc.assertForall( jsc.asciinestring,
                      ( name ) => {
      const dev = new Developer( name, 1 );
      return dev.name === name
    })
  })
})

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

const karumiDev = jsc.record({
  name: jsc.asciinestring,
  maxibons_to_grab: jsc.integer( 0, 3 )
})

const unpredictableDev = jsc.record({
  name: jsc.asciinestring,
  maxibons_to_grab: jsc.integer
})

describe('Developer', () => {
  it('should always grab a positive number of maxibons', () => {
    jsc.assertForall( unpredictableDev,
                      ( record ) => {
      const dev = new Developer( record.name,
                                 record.maxibons_to_grab );
      return dev.maxibonsToGrab() >= 0
    })
  })

  it('should assign the name of the developer in construction', () => {
    jsc.assertForall( karumiDev,
                      ( record ) => {
      const dev = new Developer( record.name,
                                 record.maxibons_to_grab );
      return dev.name === record.name
    })
  })
})

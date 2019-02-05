"use strict"

// import Developer from "./Developer"
class Developer {
  static developers() {
    const karumies = {
      pedro:  new Developer( 'Pedro',  3 ),
      fran:   new Developer( 'Fran',   1 ),
      davide: new Developer( 'Davide', 0 ),
      sergio: new Developer( 'Sergio', 2 ),
      jorge:  new Developer( 'Jorge',  1 )
    };
    return karumies;
  }

  constructor ( name, maxibons_to_grab ) {
    this.name = name;
    this.maxibons_to_grab = Math.max( 0, maxibons_to_grab );
  }

  maxibonsToGrab() {
    return this.maxibons_to_grab;
  }

  static get( developer_name ) {
    return Developer.developers()[ developer_name ]
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

  it('should assign the number of maxibons specified to every developer', () => {
    let maxibons_to_grab
    const karumies = {
      pedro: 3,
      fran: 1,
      davide: 0,
      sergio: 2,
      jorge: 1
    }
    Object.keys( karumies ).forEach( function (key) {
      maxibons_to_grab = karumies[ key ]
      assert.equal( maxibons_to_grab, Developer.get( key ).maxibonsToGrab() )
    })
  })
})

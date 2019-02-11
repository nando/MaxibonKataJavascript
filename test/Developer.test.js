import Developer from '../src/Developer'

const assert = require('assert');
const jsc = require('jsverify');

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

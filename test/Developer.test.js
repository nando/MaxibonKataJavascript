import { jsc,
         expect,
         unpredictableDev,
         karumiDev } from './helper'
import Developer from '../src/Developer'

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
      expect( Developer.get( key ).maxibonsToGrab() ).
        to.
        equal( maxibons_to_grab );
    })
  })
})

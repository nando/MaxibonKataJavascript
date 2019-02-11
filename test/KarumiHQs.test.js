import { jsc,
         expect,
         unpredictableDev,
         karumiDev } from './helper'
import KarumiHQs from '../src/KarumiHQs'
import Developer from '../src/Developer'

describe('KarumiHQs', () => {
  it('should start the day with 10 maxibons', () => {
    const karumi_hqs = new KarumiHQs();
    expect( karumi_hqs.maxibonsLeft() ).
      to.
      equal( 10 );
  })

  it('should always has more than two maxibons in the fridge', () => {
    jsc.assertForall( unpredictableDev,
                      ( record ) => {
      const hqs = new KarumiHQs();
      const dev = new Developer( record.name,
                                 record.maxibons_to_grab );

      hqs.openFridge( dev );
      return hqs.maxibonsLeft() > 2;
    })
  })
})

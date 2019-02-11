import { jsc,
         expect,
         unpredictableDev,
         karumiDev } from './helper'
import KarumiHQs from '../src/KarumiHQs'

describe('KarumiHQs', () => {
  it('should start the day with 10 maxibons', () => {
    const karumi_hqs = new KarumiHQs();
    expect( karumi_hqs.maxibonsLeft() ).
      to.
      equal( 10 );
  })
})

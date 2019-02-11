import { jsc,
         assert,
         unpredictableDev,
         karumiDev } from './helper'
import KarumiHQs from '../src/KarumiHQs'

describe('KarumiHQs', () => {
  it('should start the day with 10 maxibons', () => {
    const karumi_hqs = new KarumiHQs();

    assert.equal( karumi_hqs.maxibonsLeft(), 10 );
  })
})

import KarumiHQs from '../src/KarumiHQs'

const assert = require('assert');
const jsc = require('jsverify');

describe('KarumiHQs', () => {
  it('should start the day with 10 maxibons', () => {
    const karumi_hqs = new KarumiHQs();

    assert.equal( karumi_hqs.maxibonsLeft(), 10 );
  })
})

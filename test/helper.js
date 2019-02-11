export const assert = require('chai').assert;
export const jsc = require('jsverify');

export const karumiDev = jsc.record({
  name: jsc.asciinestring,
  maxibons_to_grab: jsc.integer( 0, 3 )
})

export const unpredictableDev = jsc.record({
  name: jsc.asciinestring,
  maxibons_to_grab: jsc.integer
})

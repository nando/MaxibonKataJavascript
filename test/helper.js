export const jsc = require('jsverify');
export const assert = require('assert');

export const karumiDev = jsc.record({
  name: jsc.asciinestring,
  maxibons_to_grab: jsc.integer( 0, 3 )
})

export const unpredictableDev = jsc.record({
  name: jsc.asciinestring,
  maxibons_to_grab: jsc.integer
})

export default class Developer {
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

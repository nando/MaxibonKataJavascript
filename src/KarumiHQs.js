export default class KarumiHQs {
  static MIN_MAXIBONS() { return 3; };
  static MAXIBONS_TO_BUY() { return 10; };

  constructor() {
    this.maxibons_left = 10;
  }

  maxibonsLeft() {
    return this.maxibons_left;
  }

  openFridge( developer ) {
    this.grab_maxibons( developer )

    if( this.maxibons_left < KarumiHQs.MIN_MAXIBONS() ) {
      this.buy_maxibons();
    }

    return this.maxibons_left;
  }

  grab_maxibons( developer ) {
    this.maxibons_left =- Math.max( 0, developer.maxibonsToGrab() );
    /* DISCLAIMER: **LAST LINE IS BUG!!**
     * It's kept in order to give a try to Stryker(*). Its fixed version
     * would be this one:
     *
     * this.maxibons_left = Math.max(0, this.maxibons_left -
     *                                  developer.maxibonsToGrab());
     *
     * * https://stryker-mutator.io/                                    */
  }

  buy_maxibons() {
    this.maxibons_left =+ KarumiHQs.MAXIBONS_TO_BUY()
  }
}

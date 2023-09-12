export class BowlingGame {
  private pins: number[]
  private MAX_PINS: number
  
  constructor() {
    this.pins = []
    this.MAX_PINS = 10;
   }

  public roll(pins: number){
    return this.pins.push(pins)
  }

  public score() {
    let score = 0;
    let firstRoll = 0;
    const FRAMES = 10;
    for(let i = 0; i < FRAMES; i++){
      if (this.isSpare(firstRoll)) {
        score += this.spareScore(firstRoll);
        firstRoll += 2;
      } else if (this.isStrike(firstRoll)) {
        score += this.strikeScore(firstRoll);
        firstRoll += 1;
      } else {
        score += this.regularFrameScore(firstRoll);
        firstRoll += 2;
      }
    }
    return score
  }

  private regularFrameScore(firstRoll: number): number {
    return this.pins[firstRoll] + this.pins[firstRoll + 1]
  }

  private isSpare(firstRoll: number): boolean {
    return (this.pins[firstRoll] + this.pins[firstRoll + 1]) === this.MAX_PINS
  }

  private spareScore(firstRoll: number): number {
    return this.MAX_PINS + this.pins[firstRoll+2];
  }  

  private isStrike(firstRoll: number): boolean {
    return this.pins[firstRoll] === this.MAX_PINS 
  }

  private strikeScore(firstRoll: number): number {
    return this.MAX_PINS + this.pins[firstRoll + 1] + this.pins[firstRoll + 2];
  }

}
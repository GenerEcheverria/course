import { BowlingGame } from "./BowlingGame";

describe('Test Bowling Game Functionality', () => {

  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame()
  });

  it('can roll', () => {
    expect(game.roll(0)).toBeDefined;
  });

  it('should calculate score of gutterGame', () => {
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0);
  });

  it('should calculate score with all 1', () => {
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20);
  });

  it('can roll a spare', () => {
    rollSpare(game);
    game.roll(3);
    rollMany(game,17,0)
    expect(game.score()).toBe(16);
  });

  it('can roll a strike', () => {
    rollStrike(game);
    game.roll(2);
    game.roll(2);
    rollMany(game, 16, 0);
    expect(game.score()).toBe(18);
  });

  it('can roll a perfect game', () => {
    rollMany(game, 12, 10);
    expect(game.score()).toBe(300);
  });
  
  function rollMany(game: BowlingGame, rolls: number, pins: number) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  function rollSpare(game: BowlingGame) {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike(game: BowlingGame) {
    game.roll(10);
  }
});
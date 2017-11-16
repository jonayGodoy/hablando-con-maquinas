import { assert } from 'chai';
import World from './World';
import Coordinate from './Coordinate';

describe("World Should",() => {
    it("Cell not live in 0-0", function () {
      let world =  World();
      let isLive = world.isLiveCell(Coordinate(0,0));
      assert.equal(isLive, false);
    });
});
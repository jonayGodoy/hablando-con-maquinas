import { assert } from 'chai';
import World from './World';
import Coordinate from './Coordinate';

describe("World Should",() => {
    it("Cell not live in 0-0", function () {
      let world =  World();
      let isLive = world.isLiveCellInCoordinate(Coordinate(0,0));
      assert.equal(isLive, false);
    });

    it("Cell live in 0-0", function () {
        let world =  World();
        world.createCell(Coordinate(0,0));
        let isLive = world.isLiveCellInCoordinate(Coordinate(0,0));
        assert.equal(isLive, true);
    });

    it("Cell has 8 neighbour", function () {
        let world =  World();
        world.createCell(Coordinate(0,0));

        world.createCell(Coordinate(0,-1));
        world.createCell(Coordinate(0,1));
        world.createCell(Coordinate(-1,-1));
        world.createCell(Coordinate(-1,0));
        world.createCell(Coordinate(-1,1));
        world.createCell(Coordinate(1,-1));
        world.createCell(Coordinate(1,0));
        world.createCell(Coordinate(1,1));

        let numberCellsNeighbours = world.getNumberCellsNeighbours(Coordinate(0,0));
        assert.equal(numberCellsNeighbours, 8);
    });
});
import {beforeEach} from "mocha";
import { assert } from 'chai';
import World from './World';
import Coordinate from './Coordinate';

describe("World Should",() => {

    let world;

    beforeEach(function () {
        world =  World();
    });

    it("Cell not live in 0-0", function () {
      let isLive = world.hasLiveCellInCoordinate(Coordinate(0,0));
      assert.equal(isLive, false);
    });

    it("Cell live in 0-0", function () {
        world.createCell(Coordinate(0,0));
        let isLive = world.hasLiveCellInCoordinate(Coordinate(0,0));
        assert.equal(isLive, true);
    });

    it("Cell has 8 neighbour", function () {
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

    it("when Cell has less 2 neighbour, die", function () {
        world.createCell(Coordinate(0,0));
        world.createCell(Coordinate(0,-1));

        world = world.update();

        assert.equal(world.hasLiveCellInCoordinate(Coordinate(0,0)), false);
        assert.equal(world.hasLiveCellInCoordinate(Coordinate(0,-1)), false);
    });

    it("when Cell has 2 or 3 neighbour, survive", function () {
        world.createCell(Coordinate(0,0));
        world.createCell(Coordinate(0,1));
        world.createCell(Coordinate(1,1));
        world.createCell(Coordinate(1,0));

        world = world.update();

        assert.equal(world.hasLiveCellInCoordinate(Coordinate(0,0)), true);
        assert.equal(world.hasLiveCellInCoordinate(Coordinate(0,1)), true);
        assert.equal(world.hasLiveCellInCoordinate(Coordinate(1,1)), true);
        assert.equal(world.hasLiveCellInCoordinate(Coordinate(1,0)), true);
    });

    it("when Cell more 3 neighbour, die", function () {
        world.createCell(Coordinate(0,0));
        world.createCell(Coordinate(0,1));
        world.createCell(Coordinate(0,-1));
        world.createCell(Coordinate(1,1));
        world.createCell(Coordinate(-1,1));

        world = world.update();

        assert.equal(world.hasLiveCellInCoordinate(Coordinate(0,0)), false);
    });

    it("when a coordinate empty has 3 cell nearby born a cell in this coordinate", function () {
        world = World();
        let coordinateSUT = Coordinate(0,0);

        world.createCell(Coordinate(1,-1));
        world.createCell(Coordinate(1,0));
        world.createCell(Coordinate(1,1));

        world = world.update();

        assert.equal(world.hasLiveCellInCoordinate(coordinateSUT), true);
    });
});
import Cell from './Cell';
import Coordinate from "./Coordinate";

let World = () => {

    let mapCoordinateCell = new Map();

    function isLiveCell(cell){
        return !!cell.alive;
    }

    function executeRules(coordinate, oldWorld, newWorld){
        let numberCellsNeighbours = oldWorld.getNumberCellsNeighbours(coordinate);

        if(numberCellsNeighbours === 2 || numberCellsNeighbours === 3 ){
            newWorld.createCell(coordinate)
        }

        coordinate.getList8NearbyCoordinates().forEach((coordinateNearby) =>{
            if(!oldWorld.hasLiveCellInCoordinate(coordinateNearby)
                && oldWorld.getNumberCellsNeighbours(coordinateNearby) === 3){
                newWorld.createCell(coordinateNearby);
            }
        })
    }

    let self = {
            update: () => {
                let newWorld = World();
                mapCoordinateCell.forEach((cell, coordinate) => {
                    executeRules(coordinate, self, newWorld);
                });
               return newWorld;

            },
            createCell: (coordinate) => {mapCoordinateCell.set(coordinate, Cell(self,coordinate)) },
            hasLiveCellInCoordinate : (coordinate) => {
                return isLiveCell(getEqualsForHashMap(mapCoordinateCell, coordinate))
            },
            getNumberCellsNeighbours: (coordinate) =>{
                let numberCellsNeighbours = 0;
                coordinate.getList8NearbyCoordinates().forEach((coordinateNeighbour) => {
                    if(self.hasLiveCellInCoordinate(coordinateNeighbour)){numberCellsNeighbours++}
                });
                return numberCellsNeighbours;
            },
            killsCell: (coordinate) =>{
                mapCoordinateCell.delete(coordinate);
            }
    };
    return self;
};
export default World;


function getEqualsForHashMap(hashMap, obj){
    let cell;
    hashMap.forEach((value, key) => {
        if(key.equalsOwn(obj)){
            cell = value
        }
    });
    return cell ? cell : {};
}
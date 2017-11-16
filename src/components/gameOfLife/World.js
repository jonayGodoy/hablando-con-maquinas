import Cell from './Cell';
import {getList8NearbyCoordinates} from './Coordinate';

let World = () => {

    let mapCoordinateCell = new Map();

    function isLiveCell(cell){
        return typeof cell === "object";
    }

    function executeRules(coordinate){
        let numberCellsNeighbours = self.getNumberCellsNeighbours(coordinate);
        if(numberCellsNeighbours < 2){self.killsCell(coordinate)}
        if(numberCellsNeighbours > 3){self.killsCell(coordinate)}
    }

    let self = {
            update: () => {
                mapCoordinateCell.forEach((cell, coordinateString) => {
                    let coordinate = JSON.parse(coordinateString);
                    executeRules(coordinate);
                })
            },
            createCell: (coordinate) => {mapCoordinateCell.set(JSON.stringify(coordinate), Cell(self,coordinate)) },
            hasLiveCellInCoordinate : (coordinate) => {
               return isLiveCell(mapCoordinateCell.get(JSON.stringify(coordinate)))
            },
            getNumberCellsNeighbours: (coordinate) =>{
                let numberCellsNeighbours = 0;
                getList8NearbyCoordinates(coordinate).forEach((coordinateNeighbour) => {
                    if(self.hasLiveCellInCoordinate(coordinateNeighbour)){numberCellsNeighbours++}
                });
                return numberCellsNeighbours;
            },
            killsCell: (coordinate) =>{
                mapCoordinateCell.delete(JSON.stringify(coordinate));
            }
    };
    return self;
};
export default World;
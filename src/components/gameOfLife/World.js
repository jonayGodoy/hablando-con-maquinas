import Coordinate from './Coordinate';
import Cell from './Cell';

let World = () => {

    let mapCoordinateCell = [];

    function isLiveCell(cell){
        return typeof cell === "object";
    }

    let self = {
            createCell: (coordinate) => {mapCoordinateCell[coordinate] = Cell(this,coordinate) },
            isLiveCellInCoordinate : (coordinate) => {
               return isLiveCell(mapCoordinateCell[coordinate])
            },
            getNumberCellsNeighbours: (coordinate) =>{
            let coordinateYUp = coordinate.y +1;
            let coordinateYDown = coordinate.y -1;
            let coordinateXRight = coordinate.x +1;
            let coordinateXLeft = coordinate.x -1;

            let listCoordinatesNeighbours = [
                Coordinate(coordinate.x,coordinateYUp),
                Coordinate(coordinateXRight,coordinateYUp),
                Coordinate(coordinateXLeft,coordinateYUp),
                Coordinate(coordinate.x,coordinateYDown),
                Coordinate(coordinateXRight,coordinateYDown),
                Coordinate(coordinateXLeft,coordinateYDown),
                Coordinate(coordinateXRight,coordinate.y),
                Coordinate(coordinateXLeft,coordinate.y),
            ];

            let numberCellsNeighbours = 0;
                console.log(listCoordinatesNeighbours);

                listCoordinatesNeighbours.forEach((coordinateNeighbour) => {
                    if(self.isLiveCellInCoordinate(coordinateNeighbour))
                        numberCellsNeighbours++
                });

            return numberCellsNeighbours;
        }
    };
    return self;
};
export default World;
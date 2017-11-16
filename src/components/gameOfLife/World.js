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
                let numberCellsNeighbours = 0;
                coordinate.getList8NearbyCoordinates().forEach((coordinateNeighbour) => {
                    if(self.isLiveCellInCoordinate(coordinateNeighbour)){numberCellsNeighbours++}
                });
                return numberCellsNeighbours;
        }
    };
    return self;
};
export default World;
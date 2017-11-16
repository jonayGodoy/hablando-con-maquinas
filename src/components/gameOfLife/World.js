import Cell from './Cell';

let World = () => {

    let mapCoordinateCell = new Map();

    function isLiveCell(cell){
        return typeof cell === "object";
    }

    let self = {
            update: () => {
                mapCoordinateCell.forEach((cell) => {
                    cell.update()})
            },
            createCell: (coordinate) => {mapCoordinateCell.set(JSON.stringify(coordinate), Cell(self,coordinate)) },
            isLiveCellInCoordinate : (coordinate) => {
               return isLiveCell(mapCoordinateCell.get(JSON.stringify(coordinate)))
            },
            getNumberCellsNeighbours: (coordinate) =>{
                let numberCellsNeighbours = 0;
                coordinate.getList8NearbyCoordinates().forEach((coordinateNeighbour) => {
                    if(self.isLiveCellInCoordinate(coordinateNeighbour)){numberCellsNeighbours++}
                });
                return numberCellsNeighbours;
            },
            resetCoordinate: (coordinate) =>{
                mapCoordinateCell.delete(JSON.stringify(coordinate));
            }
    };
    return self;
};
export default World;
import Cell from './Cell';

let World = () => {

    let mapCoordinateCell = [];

    function isLiveCell(cell){
        return typeof cell === "object";
    }


    return {
        createCell: (coordinate) => {mapCoordinateCell[coordinate] = Cell() },
        isLiveCellInCoordinate : (coordinate) => {
           return isLiveCell(mapCoordinateCell[coordinate])
        }
    };
};
export default World;
let Cell = (world, coordinate) => {
    let self = {
        update: () =>{
            let numberCellsNeighbours = world.getNumberCellsNeighbours(coordinate);
            if(numberCellsNeighbours < 2){self.die()}
        },
        die: () =>{world.resetCoordinate(coordinate)}
    };
    return self;

};
export default Cell;
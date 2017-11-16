let Cell = (world, coordinate) => {
    let self = {
        update: () =>{
            let numberCellsNeighbours = world.getNumberCellsNeighbours(coordinate);
            if(numberCellsNeighbours < 2){self.die()}
            if(numberCellsNeighbours > 3){self.die()}
        },
        die: () =>{world.killsCell(coordinate)}
    };
    return self;

};
export default Cell;
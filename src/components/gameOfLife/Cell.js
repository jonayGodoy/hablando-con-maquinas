let Cell = (world, coordinate) => {
    let self = {
        update: () =>{
            if(world.getNumberCellsNeighbours(coordinate) < 2){self.die()}
        },
        die: () =>{world.resetCoordinate(coordinate)}
    };
    return self;

};
export default Cell;
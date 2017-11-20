let Coordinate = (x,y) => {
    let self = {
        x: x,
        y: y,
        equalsOwn: (obj) => (self.x === obj.x && self.y === obj.y)
    };
    return self;
};

export let getList8NearbyCoordinates = (coordinate) => {
    let coordinateYUp = coordinate.y +1;
    let coordinateYDown = coordinate.y -1;
    let coordinateXRight = coordinate.x +1;
    let coordinateXLeft = coordinate.x -1;

    return [
        Coordinate(coordinate.x,coordinateYUp),
        Coordinate(coordinateXRight,coordinateYUp),
        Coordinate(coordinateXLeft,coordinateYUp),
        Coordinate(coordinate.x,coordinateYDown),
        Coordinate(coordinateXRight,coordinateYDown),
        Coordinate(coordinateXLeft,coordinateYDown),
        Coordinate(coordinateXRight,coordinate.y),
        Coordinate(coordinateXLeft,coordinate.y),
    ]
};

export default Coordinate;

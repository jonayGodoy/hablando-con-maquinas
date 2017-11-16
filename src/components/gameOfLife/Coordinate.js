let Coordinate = (x,y) => {
    let coordinateYUp = y +1;
    let coordinateYDown = y -1;
    let coordinateXRight = x +1;
    let coordinateXLeft = x -1;

    return {
        x: x,
        y: y,
        getList8NearbyCoordinates: () => [
            Coordinate(x,coordinateYUp),
            Coordinate(coordinateXRight,coordinateYUp),
            Coordinate(coordinateXLeft,coordinateYUp),
            Coordinate(x,coordinateYDown),
            Coordinate(coordinateXRight,coordinateYDown),
            Coordinate(coordinateXLeft,coordinateYDown),
            Coordinate(coordinateXRight,y),
            Coordinate(coordinateXLeft,y),
        ]
    };
};
export default Coordinate;
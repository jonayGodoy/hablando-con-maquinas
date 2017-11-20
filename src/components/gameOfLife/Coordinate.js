let Coordinate = (x,y) => {
    let self = {
        x: x,
        y: y,
        equalsOwn: (obj) => (self.x === obj.x && self.y === obj.y),
        getList8NearbyCoordinates: () => {
            let coordinateYUp = self.y + 1;
            let coordinateYDown = self.y - 1;
            let coordinateXRight = self.x + 1;
            let coordinateXLeft = self.x - 1;

            return [
                Coordinate(self.x, coordinateYUp),
                Coordinate(coordinateXRight, coordinateYUp),
                Coordinate(coordinateXLeft, coordinateYUp),
                Coordinate(self.x, coordinateYDown),
                Coordinate(coordinateXRight, coordinateYDown),
                Coordinate(coordinateXLeft, coordinateYDown),
                Coordinate(coordinateXRight, self.y),
                Coordinate(coordinateXLeft, self.y),
            ]
        }
    };
    return self;
};
export default Coordinate;

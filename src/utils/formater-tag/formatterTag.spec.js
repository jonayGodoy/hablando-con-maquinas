import { expect } from "chai";
import formatter from "./formatterTags"

describe("Formatter Tag",() =>{
    it("return convert raw tags", () => {
        let rawTags = "eventos";
        let tags = formatter.format(rawTags);
        expect(tags).to.deep.equal(["eventos"]);
    });
});
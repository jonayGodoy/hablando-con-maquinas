import { expect } from "chai";
import formatter from "./formatterTags"

describe("Formatter Tag",() =>{
    it("return convert raw tags in tag", () => {
        let rawTags = "eventos";
        let tags = formatter.format(rawTags);
        expect(tags).to.deep.equal(["eventos"]);
    });

    it("return convert several tag", () => {
        let rawTags = "eventos,git";
        let tags = formatter.format(rawTags);
        expect(tags).to.deep.equal(["eventos","git"]);
    });
});
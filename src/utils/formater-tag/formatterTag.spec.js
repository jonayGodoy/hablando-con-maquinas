import { expect } from "chai";
import {TAGS_CONST} from "./formatterTags"
import formatter from "./formatterTags"

describe("Formatter Tag",() =>{
    it("return convert raw tags in tag", () => {
        let rawTags = "eventos";
        let tags = formatter.format(rawTags);
        expect(tags).to.deep.equal([TAGS_CONST.events]);
    });

    it("return convert several tag", () => {
        let rawTags = "eventos,git";
        let tags = formatter.format(rawTags);
        expect(tags).to.deep.equal([
            TAGS_CONST.events,
            TAGS_CONST.git
        ]);
    });

    it("ignore empty", () => {
        let rawTags = "eventos,";
        let tags = formatter.format(rawTags);

        expect(tags).to.deep.equal([TAGS_CONST.events]);
    });

    it("throw exception when tags not exit", () => {
        let rawTags = "eventas";
        let rawFunction = () => {formatter.format(rawTags)}

        expect(rawFunction).to.throw("tag \'eventas\' does not exist in const list");
    });



});
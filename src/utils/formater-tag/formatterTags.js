function FormatterTags() {
    function proxyFormat(rawTags) {
        const tags = format(rawTags);
        tags.forEach(x => existTag(x) );

        return tags;
        function format(rawTags){
            return rawTags.split(',')
                .filter(x => !!x);
        }
        function existTag(tag){
            const rawConst = Object.values(TAGS_CONST).includes(tag);
            if(!rawConst){
                throw new Error("tag '"+tag+"' does not exist in const list");
            }
        }
    }

    return {
        format: proxyFormat
    };
}

export const TAGS_CONST = Object.freeze({
    events: "eventos",
    git : "git"
});

export default FormatterTags();
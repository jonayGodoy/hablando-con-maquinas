function FormatterTags() {

    function format(rawTags){
        let tags = rawTags.split(',');
        return tags;
    }

    return {
        format: format
    };
}

export const TAGS_CONST = Object.freeze({
    events: "eventos",
    git : "git"
});


export default FormatterTags();
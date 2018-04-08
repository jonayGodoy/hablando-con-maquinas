function FormatterTags() {

    function format(rawTags){
        return rawTags.split(',')
                .filter(x => !!x);
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
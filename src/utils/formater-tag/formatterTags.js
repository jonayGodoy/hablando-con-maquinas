function FormatterTags() {

    function format(rawTags){


        let tagsSeparate = rawTags.split(',');
        let tagsWithoutEmpty = tagsSeparate.filter(x => !!x);

        return tagsWithoutEmpty;
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
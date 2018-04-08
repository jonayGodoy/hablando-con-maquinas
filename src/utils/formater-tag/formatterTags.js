function FormatterTags() {

    function format(rawTags){
        let tags = rawTags.split(',');
        return tags;
    }

    return {
        format: format
    };
}


export default FormatterTags();
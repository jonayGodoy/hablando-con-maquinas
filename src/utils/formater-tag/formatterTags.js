function FormatterTags() {
    function proxyFormat(rawTags) {
        const tags = format(rawTags);
        tags.forEach(x => existTag(x) );

        return tags;
        function format(rawTags){
            return rawTags.split(',')
                .filter(x => !!x)
                .map(firstUppercase);

            function firstUppercase(string){
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
        }
        function existTag(tag){
            let lowerTag =  tag.toLowerCase();

            const rawConst = Object
                .values(TAGS_CONST)
                .includes(lowerTag);
            if(!rawConst){
                throw new Error("tag '"+lowerTag+"' does not exist in const list");
            }
        }
    }

    return {
        format: proxyFormat
    };
}

export const TAGS_CONST = Object.freeze({
    events : "eventos",
    git : "git",
    books : "libros",
    personal_experience : "experiencia-personal",
    architecture : "arquitectura",
    games : "games",
    test : "test",
    katas : "katas"
});

export default FormatterTags();
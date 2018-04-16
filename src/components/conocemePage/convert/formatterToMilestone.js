function FormatterMilestone(){
    function linkedinToMilestone(cv){
        return convertWorkToMilestone(cv.work);

        function convertWorkToMilestone(work){
            return work ?
                    work.map(x => {
                        return {
                            "title" : x.position,
                            "date" : x.startDate,
                            "summary": shortenParagraph(x.summary),
                            "description" : x.summary
                        }
                    })
                : [];
        }
        function shortenParagraph(string){
            const end = 150;
            return string.substring(0, end) + "...";
        }
    }

    return {
        linkedinToMilestone : linkedinToMilestone
    }
}


export default FormatterMilestone();
function FormatterMilestone(){
    function linkedinToMilestone(cv){
        return convertWorkToMilestone(cv.work)
                .concat(convertEducationToMilestone(cv.education))
                .concat(convertHonorsAwardsToMilestone(cv.honors_awards));

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
        function convertEducationToMilestone(education){
            return education ?
                education.map(x => {
                    return {
                        "title" : x.studyType,
                        "date" : x.startDate,
                        "summary": "",
                        "description" : ""
                    }
                })
                : [];
        }
        function convertHonorsAwardsToMilestone(honors_awards){
            return honors_awards ?
                honors_awards.map(x => {
                    return {
                        "title": x.Title,
                        "date": x.Issue_Date,
                        "summary": shortenParagraph(x.Description),
                        "description" : x.Description
                    }
                })
                : [];
        }

    }

    return {
        linkedinToMilestone : linkedinToMilestone
    }
}


export default FormatterMilestone();
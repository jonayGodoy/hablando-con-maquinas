function FormatterMilestone(){

    /*todo: extraer estructura del milestone a un solo sitio
    * ordenar por fecha
    * */
    function linkedinToMilestone(cv){
        return convertWorkToMilestone(cv.work)
                .concat(convertEducationToMilestone(cv.education))
                .concat(convertHonorsAwardsToMilestone(cv.honors_awards));

        function convertWorkToMilestone(work){
            return work ?
                    work.map(x => {
                        return {
                            "milestoneType": "Experiencia",
                            "title" : x.company+" "+x.position,
                            "date" : formatDate(x.startDate),
                            "summary": createSummary(x.summary),
                            "description" : x.summary
                        }
                    })
                : [];
        }

        function createSummary(string){
            const end = 150;
            return string.substring(0, end) + "...";
        }
        function formatDate(date){
            if(date.includes("/")){
                return date.split("/").reverse().join("-");
            }
            return date;
        }
        function convertEducationToMilestone(education){
            return education ?
                education.map(x => {
                    return {
                        "milestoneType":"Estudios",
                        "title" : x.studyType,
                        "date" : formatDate(x.startDate),
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
                        "milestoneType":"Premios y otros",
                        "title": x.Title,
                        "date": formatDate(x.Issue_Date),
                        "summary": createSummary(x.Description),
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
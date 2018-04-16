import { expect } from "chai";
import formatter from "./formatterToMilestone";

/*
todo:
- quitar fragilidad en los test en el summario del milestone
 */

describe("convert linkedin entities to milestone",() =>{
    it("convert work in milestone", () =>{
        const workSummary = "-Aprender. A través de practicas como mob-programming, libros, cursos e implementando\nfuncionalidades en algunos proyectos siempre buscando hacerlo de le mejor manera posible.\nAsi como metodologias como integración continua y TDD\n-Las tecnologías que utilizamos fueron javascript, react-redux y springboot(java). Asi como\nherramientas complementarias para testear Jest, mocha, junit, selenium.";
        let work = {
            "work": [
            {
                "company": "Codesai",
                "position": "Alumno Practicas",
                "website": "",
                "startDate": "2017-03-01",
                "summary": workSummary,
                "highlights": [],
                "endDate": "2017-06-01"
            }]
        };
        let milestone =
             [
                {
                    "title": "Alumno Practicas",
                    "date":"2017-03-01",
                    "summary": workSummary.substring(0,150)+"...",
                    "description" : workSummary
                }
            ];

        expect(formatter.linkedinToMilestone(work))
            .to.deep.equal(milestone);
    });
    it("return empty when work is undefined", () =>{
        let work = {};
        let milestone = [];

        expect(formatter.linkedinToMilestone(work))
            .to.deep.equal(milestone);
    });
});
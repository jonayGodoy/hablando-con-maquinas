import { expect } from "chai";
import formatter from "./formatterToMilestone";


describe("convert linkedin entities to milestone",() =>{
    it("convert work in milestone", () =>{
        let work = {
            "work": [
            {
                "company": "Codesai",
                "position": "Alumno Practicas",
                "website": "",
                "startDate": "2017-03-01",
                "summary": "-Aprender. A través de practicas como mob-programming, libros, cursos e implementando\nfuncionalidades en algunos proyectos siempre buscando hacerlo de le mejor manera posible.\nAsi como metodologias como integración continua y TDD\n-Las tecnologías que utilizamos fueron javascript, react-redux y springboot(java). Asi como\nherramientas complementarias para testear Jest, mocha, junit, selenium.",
                "highlights": [],
                "endDate": "2017-06-01"
            }]
        };
        let milestone =
             [
                {
                    "title": "Alumno Practicas",
                    "date":"2017-03-01",
                    "summary": "-Aprender. A través de practicas como mob-programming, libros, cursos e implementando\nfuncionalidades en algunos proyectos siempre buscando hacerlo de...",
                    "description" : "-Aprender. A través de practicas como mob-programming, libros, cursos e implementando\nfuncionalidades en algunos proyectos siempre buscando hacerlo de le mejor manera posible.\nAsi como metodologias como integración continua y TDD\n-Las tecnologías que utilizamos fueron javascript, react-redux y springboot(java). Asi como\nherramientas complementarias para testear Jest, mocha, junit, selenium."
                }
            ];

        expect(formatter.linkedinToMilestone(work))
            .to.deep.equal(milestone);
    });
});
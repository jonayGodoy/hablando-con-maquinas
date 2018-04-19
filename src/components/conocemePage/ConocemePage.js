import React from 'react';
import config from "../../../config-blog";
import cv from "./cvDTO";
import formatted from "./convert/formatterToMilestone"

import imgCV from '../../assets/img/fot_carnet.jpg';

import './conoceme.css';
import './timeLine.css'


const milestones = formatted.linkedinToMilestone(cv);

function IsPar(n){
    return (n % 2 === 0);
}

class ConocemePage extends React.Component {
    render () {
        return(<div>
                <div className="introduction-cv">
                    <div className="name-cv">
                        Jonay Eliezer Godoy Reyes
                    </div>
                    <div>Nací en Gran canaria en 1991</div>
                    <p>
                        Empece a programar en CIFP Villa de Agüimes, poco despues
                        de terminar mi primer ciclo superior descubrí a la comunidad de
                        software craftmanship de Gran canaria.Gracias a ellos redescubrí
                        la programación y me di cuenta de todo lo que me quedaba por aprender.
                        Tras ello, tuve la oportunidad de hacer las practicas con Carlos Ble.
                    </p>
                    <p>
                        En parte, para agradecer todo lo que la comunidad me ha ayudado a crecer.
                        He impartido cursos de TDD, clases en centros educactivos, he organizado
                        el globalcoderetreat y he sido voluntario en la asociación canaria
                        desarrolladores de videojuegos.
                    </p>
                    <p>
                        A finales de 2017 buscando nuevas aventuras decido
                        trasladarme a Madrid para trabajar en SaludOnNet.
                    </p>
                </div>
                {
                milestones.map((milestone, index) => {
                    return (
                        <div>
                            <ul className="timeline">
                                <li>
                                    <div className={IsPar(index) ? "direction-r" : "direction-l" }>
                                        <div className="flag-wrapper">
                                            <div className="flag">{milestone.milestoneType}</div>
                                            <span className="flag">{milestone.title}</span>
                                            <span className="time-wrapper">
                                                <span className="time">{milestone.date}</span>
                                            </span>
                                        </div>
                                        <div className="desc">{milestone.summary}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>)
                })
            }</div>
        );


        return (
            <div className="cv">
                <div>
                    <img className="img-thumbnail-new cv-image" src={imgCV}/>
                    <div className="basic-data">
                        <h1>{cv.basics.name}</h1>
                        <h6><a href={"mailto:"+config.email}>{config.email}</a></h6>
                        <h3>{cv.basics.label}</h3>
                    </div>
                </div>
                <hr/>
                <div className="summary">
                    <h3>{cv.basics.summary}</h3>
                </div>
                <hr/>
                <hr/>
                {/*todo: repair skills
                <div className="block-linkedin">
                    <h3 className="block-linkedin-left">Skills</h3>
                    <div className="block-linkedin-right">
                        {cv.skills.map((skill) => (
                            <div>{skill.name}</div>
                        ))}
                        {cv.skills.map((skill,index) =>(<div className="div-inline" key={index}>{skill.name}</div>))
                            .map((skillTD, index ,array) => array.splice(index,index+3))
                            .map((skillsGrouped,index) => <h3 key={index}>{skillsGrouped}</h3>)
                        }
                    </div>
                  </div>
                   <hr/>
                  */}
                <div className="block-linkedin">
                    <h3 className="block-linkedin-left">Experiencia</h3>
                    <div className="block-linkedin-right">
                        {cv.work.map((work, index) => (
                          <div key={index}>
                            <h3 >{work.company}</h3>
                            <h4>{work.position}</h4>
                            <h5 className="right">{work.startDate+"|"+work.endDate}</h5>
                            <p>{work.summary}</p>
                          </div>
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="block-linkedin">
                    <h3 className="block-linkedin-left">Educación</h3>
                    <div className="block-linkedin-right">
                        {cv.education.map((study, index) => (
                            <div key={index}>
                                <h3>{study.institution}</h3>
                                <h4>{study.studyType}</h4>
                                <h5>{study.startDate+"|"+study.endDate}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="block-linkedin">
                    <h3 className="block-linkedin-left">Reconocimientos y premios</h3>
                    <div className="block-linkedin-right">
                        {cv.honors_awards.map((honor_award,index) => (
                            <div key={index}>
                                <h3>{honor_award.Title}</h3>
                                <h4>{honor_award.Issuer}</h4>
                                <h5>{honor_award.Issue_Date}</h5>
                                <p>{honor_award.Description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ConocemePage


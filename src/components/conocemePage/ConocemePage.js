import React from 'react';
import config from "../../../config-blog";
import cv from "./cvDTO";
import imgCV from '../../assets/img/fot_carnet.jpg';

import './conoceme.css';

class ConocemePage extends React.Component {

    render () {
        return (
            <div className="cv container-fluid">
                <div className="row center-block">
                    <img className="img-thumbnail col-md-2 center-block"
                        src={imgCV}
                    />
                    <div className="col-md-9 summaryMain">
                        <h1>{cv.basics.name}</h1>
                        <h6><a href={"mailto:"+config.email}>{config.email}</a></h6>
                        <h3>{cv.basics.label}</h3>
                    </div>
                </div>
                <hr/>
                <div className="row text-center">
                    <h3 >{cv.basics.summary}</h3>
                </div>
                <hr/>
                <div className="row">
                    <h3 className="col-md-4">Skills</h3>
                    <table className="col-md-8 tableSkills">
                        {cv.skills.map((skill,index) =>(<td key={index}>{skill.name}</td>))
                            .map((skillTD, index ,array) => array.splice(index,index+3))
                            .map((skillsGrouped,index) => <tr key={index}>{skillsGrouped}</tr>)
                        }
                    </table>
                </div>
                <hr/>
                <div className="row">
                    <h3 className="col-md-4">Experiencia</h3>
                    <div className="col-md-8">
                        {cv.work.map((work) => (
                          <div >
                            <h3 >{work.company}</h3>
                            <h4>{work.position}</h4>
                            <h5 className="right">{work.startDate+"|"+work.endDate}</h5>
                            <p>{work.summary}</p>
                          </div>
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <h3 className="col-md-4 text">Educación</h3>
                    <div className="col-md-8">
                        {cv.education.map((study) => (
                            <div >
                                <h3>{study.institution}</h3>
                                <h4>{study.studyType}</h4>
                                <h5>{study.startDate+"|"+study.endDate}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <h3 className="col-md-4">Reconocimientos y premios</h3>
                    <div className="col-md-8">
                        {cv.honors_awards.map((honor_award) => (
                            <div >
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


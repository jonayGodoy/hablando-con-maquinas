import React from 'react';
import config from "../../../config-blog";
import cv from "./cvDTO";
import imgCV from '../../assets/img/fot_carnet.jpg';

import './conoceme.css';

class ConocemePage extends React.Component {

    render () {
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


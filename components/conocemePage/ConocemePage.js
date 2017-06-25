import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import cv from "./cvDTO"
import imgCV from '../../pages/global-img/fot_carnet.png';
import './conoceme.css';

class ConocemePage extends React.Component {

    render () {
        return (
            <div className="container-fluid">
                <div className="row center-block">
                    <img className="img-responsive col-md-2 center-block"
                        src={imgCV}
                    />
                    <div className="col-md-9">
                        <h1>{cv.basics.name}</h1>
                        <h6>{config.email}</h6>
                        <h3>{cv.basics.label}</h3>
                    </div>
                </div>
                <hr className="row"/>
                <div className="row text-center">
                    <h3 >{cv.basics.summary}</h3>
                </div>
                <hr className="row"/>
                <div className="row">
                    <h3 className="col-md-3">Skills</h3>
                    <table className="col-md-9">
                        {cv.skills.map((skill) =>(<td>{skill.name}</td>))
                            .map((skillTD, index ,array) => array.splice(index,index+3))
                            .map((skillsGrouped) => <tr>{skillsGrouped}</tr>)
                        }
                    </table>
                </div>
                <hr className="row"/>
                <div className="row">
                    <h3 className="col-md-3">Experiencia</h3>
                    <div className="col-md-9">
                        {cv.work.map((work) => (
                            <div >
                                <div className="row">
                                    <h3 >{work.company}</h3>
                                    <h4>{work.position}</h4>
                                    <h5 className="right">{work.startDate+"|"+work.endDate}</h5>
                                </div>
                                <p className="row">{work.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="row"/>
                <div className="row">
                    <h3 className="col-md-3">Educación</h3>
                    <div className="col-md-9">
                        {cv.education.map((study) => (
                            <div >
                                <h3>{study.institution}</h3>
                                <h4>{study.studyType}</h4>
                                <h5>{study.startDate+"|"+study.endDate}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="row"/>
                <div className="row">
                    <h3 className="col-md-3">Reconocimientos y premios</h3>
                    <div className="col-md-9">
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

ConocemePage.propTypes = {
    route: React.PropTypes.object,
};

export default ConocemePage


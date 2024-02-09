import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Experience extends Component {

    render() {
        return (
            <div className="experience">
                <div style={{ backgroundColor: `#BA160C`, width: `100%`, height: `5px` }}></div>
                <div style={{ backgroundColor: `#D36A64`, width: `100%`, height: `5px` }}></div>
                <div className="container-fluid experience-container">
                    <div className="container item-wrapper">
                        <div id="inter" className="work-item">
                            <div className="work-img">
                                <img
                                    src={require("../images/interests.jpg")}
                                    role={"presentation"}
                                />
                            </div>
                            <div className="title">Interests & Languages</div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                    <ul>
                                        <li>Front-end Development</li>
                                        <li>Web and Mobile Development</li>
                                        <li>Artificial Intelligence and Games</li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                    <ul>
                                        <li><b>Portuguese: </b>native</li>
                                        <li><b>English: </b>intermediary</li>
                                        <li><b>Spanish: </b>basic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="form" className="work-item">
                            <div className="work-img">
                                <img
                                    src={require("../images/formation.png")}
                                    role={"presentation"}
                                />
                            </div>
                            <div className="title">Graduations/Certifications & Experiences</div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                    <ul>
                                        <li><em>AZ-204: Developing Solutions for Microsoft Azure (Sept/2023)</em></li>
                                        <li>Senior Software Engineer I in Solutis Tecnologias LTDA (Feb/2024-Currently)</li>
                                        <li>Full Stack Web Developer in Forlogic Software LTDA (Jan/2020-Feb/2024)</li>
                                        <li><span className="underline-text">Postgraduation</span>: Database Administration and Digital product design - UX-UI - UNOPAR (2021-2021)</li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                    <ul>
                                        <li>Technology in Systems Analysis and Development - UTFPR-CP (2017-2020)</li>
                                        <li>Mechanical Production Technician - UTFPR-CP (2013-2016)</li>
                                        <li>Enactus UTFPR-CP member (Sept/2019-Dec/2020)</li>
                                        <li>Internship Technical Support in CDS - Informática LTDA (Mar/2018-June/2018)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Helpers.Element(Experience);

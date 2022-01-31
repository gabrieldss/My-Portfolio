import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Home extends Component {

    render() {
        return(
            <div className="home">
                <div style={{backgroundColor: `#3993DD`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#81BAE9`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid about-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div className="about-item">
                                <div className="about-img">
                                    <img
                                        src={require("../images/gabriel.jpg")}
                                        role={"presentation"}
                                    />
                                </div>
                                <div className="name">Gabriel dos Santos Souza</div>
                                <hr></hr>
                                <div className="about-blurb">
                                    <p>
                                        I'm graduated in Mechanical Production Technician (UTFPR-CP) and Technology in Systems Analysis and
                                        Development (UTFPR-CP). I love technology and see in this area a great opportunity for personal and 
                                        professional growth.
                                    </p>
                                </div>
                                <hr></hr>
                                <div className="skills">
                                    <p id="skills-title"><b>SKILLS:</b></p>
                                    <div className="skills-container">
                                    <div className="skills-1">
                                            <div>HTML, CSS</div> 
                                            <div>JavaScript, C#, Entity Framework</div>
                                            <div>AngularJS, Syncfusion</div>
                                            <div>ReactJS, SQL Server</div>
                                            <div>Stimulsoft Reports.Web</div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Home);

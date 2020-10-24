import React from 'react';
import { Helpers } from 'react-scroll';

function Projects() {
    return(
        <div className="projects">
            <div style={{backgroundColor: `#FFA630`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#FFD6A0`, width: `100%`, height: `5px`}}></div>
            <div className="container-fluid proj-container">
            <div className="container item-wrapper">
            <div className="work-item">
                                <div className="work-img">
                                    <h5 id="my_projects_title"><b>My Projects</b></h5>
                                    </div>
                                    <hr></hr>
                                <div className="proj-img">
                                <a target="_blank" href="https://github.com/gabrieldss/My_Projects">
                                    <img
                                        src={require("../images/my_projects.png")}
                                        role={"presentation"} />
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
    )
}

export default Helpers.Element(Projects);

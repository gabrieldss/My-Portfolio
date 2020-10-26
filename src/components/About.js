import React from 'react';
import { Helpers } from 'react-scroll';

function About() {
    return(
        <div className="about">
            <div style={{backgroundColor: `#73001A`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#B40028`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#E10032`, width: `100%`, height: `5px`}}></div>
            <div className="container-fluid edu-container">
                <div className="container item-wrapper">
                    <div className="row">

                        <div id="masters" className="col-xs-12 col-sm-6 edu-wrapper">
                            <div className=" edu-item">
                                <div className="title">BIOGRAPHY</div>
                                <hr></hr>
                                <div className="honors-wrapper">
                                <div className="honors-item">
                                       Start my studyng trajectory realizing Mechanical Production Technician. 
                                       But, in fact always love tecnology, then i ingressed in Technology in 
                                       Systems Analysis and Development, a great and fast graduation in a growing 
                                       area and very importart for society, with vast labor market. I believe that 
                                       technology is the present and the future of the world. 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="bachelors" className="col-xs-12 col-sm-6 edu-wrapper">
                            <div className="edu-item">
                                <div className="title">PROFESSION</div>
                                <hr></hr>
                                <div className="honors-wrapper">
                                    <div className="honors-item">
                                            The contact with tecnology has always been present in my life, 
                                            then with this motivation the change the world and create new 
                                            things, i realized the graduation in this area at UTFPR-CP, 
                                            starting in the year 2017. Inside the course i realized projects 
                                            and interships and i saw in practic the importance of this area. 
                                            Currently, i work as Developer in Forlogic Software in my 
                                            hometown, Cornélio Procópio.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpers.Element(About);

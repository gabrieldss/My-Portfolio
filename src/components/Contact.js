import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <div style={{backgroundColor: `#58355E`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#947E98`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid contact-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div className="contact-item">
                                <br></br>
                            <div className="work-img">
                                    <img
                                        src={require("../images/contact.png")}
                                        role={"presentation"}
                                    />
                            </div>
                                <div className="contact-title">Contact me</div>
                                <hr></hr>
                                <div id="email">gabriel-santosouza@hotmail.com</div>
                                <div className="contact-card-wrapper">
                                    <div className="col-xs-12 col-sm-4 github">
                                        <a target="_blank" href="https://github.com/gabrieldss">
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <div>GitHub</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 linkedin">
                                        <a target="_blank" href="https://www.linkedin.com/in/gabrieldssouza/">
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <div>LikedIn</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 curriculum">
                                    <a target="_blank" href={require("../files/Curriculum.pdf")} download="gabrielsouza_curriculum">
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <div>Curriculum</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <center>
                                    <a  id="form_contact_title">Contact Form:</a>
                                    </center>
                                    <center>
                                    <form action="https://formspree.io/gabriel-santosouza@hotmail.com" method="POST">
                                    <div>
                                    <input className="input-text" type="text" name="Name:" placeholder="Name"></input>
                                    </div>
                                    <div>
                                    <input className="input-text" type="text" name="E-mail:" placeholder="E-mail"></input>
                                    </div>
                                    <div>
                                    <input className="input-text" type="text" name="Subject:" placeholder="Subject"></input>
                                    </div>
                                    <div>
                                    <textarea className="area-message" type="text" name="Message:" placeholder="Write your message..." rows="5"></textarea> 
                                    </div>
                                    <button className="btn">SEND</button>
                                    <br></br><br></br><br></br>
                                    </form>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Contact);

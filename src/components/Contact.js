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
                                <div className="contact-title">Contate-me</div>
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
                                        <a target="_blank" href="https://www.linkedin.com/in/gabriel-dos-santos-souza-3aaa6a159/">
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
                                    <div className="col-xs-12 col-sm-4 curriculo">
                                    <a target="_blank" href={require("../files/Curriculo.pdf")} download="gabrielsouza_curriculo" >
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <div>Currículo</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <center>
                                    <a>Forumulário de Contato:</a>
                                    </center>
                                    <center>
                                    <form action="https://formspree.io/gabriel-santosouza@hotmail.com" method="POST">
                                    <div>
                                    <input type="text" name="Nome:" placeholder="Nome" maxlength="20"></input>
                                    </div>
                                    <div>
                                    <input type="text" name="E-mail:" placeholder="E-mail" maxlength="20"></input>
                                    </div>
                                    <div>
                                    <input type="text" name="Assunto:" placeholder="Assunto" maxlength="20"></input>
                                    </div>
                                    <div>
                                    <textarea type="text" name="Mensagem:" placeholder="Digite sua mensagem"></textarea> 
                                    </div>
                                    <button>Enviar</button>
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

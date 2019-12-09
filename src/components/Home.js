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
                                        Sou formado em Técnico em Produção Mecânica e atualmente curso 
                                        Tecnologia em  Análise em Desenvolvimento de Sistemas pela UTFPR-Câmpus Cornélio 
                                        e vejo neste ramo uma ótima oportunidade de crescimento pessoal e profissional.
                                    </p>
                                </div>
                                <hr></hr>
                                <div className="skills">
                                    <p id="skills-title">Habilidades: </p>
                                    <div className="skills-container">
                                        <div className="skills-1">
                                            <div>HTML5, CSS3</div>
                                            <div>MySql, SQL Server, PostgreSQL</div>
                                            <div>Programação C, Java</div>
                                            <div>AutoCAD</div>
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

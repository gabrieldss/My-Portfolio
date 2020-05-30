import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Experience extends Component {

    render() {
        return(
            <div className="experience">
                <div style={{backgroundColor: `#BA160C`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#D36A64`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid experience-container">
                    <div className="container item-wrapper">
                            <div id="inter" className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/interesses.jpg")}
                                        role={"presentation"}
                                    />
                                </div>
                                <div className="title">Interesses & Idiomas</div>
                                <hr></hr>
                                <div className="row">
                                <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>GAMES</li>
                                            <li>Desenvolvimento Web e Móvel</li>
                                            <li>Inteligência Artificial</li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>Inglês: Básico</li>
                                            <li>Espanhol: Básico</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="form" className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/formacao.png")}
                                        role={"presentation"}
                                    />
                                </div>
                                <div className="title">Formação & Atividades</div>
                                <hr></hr>
                                <div className="row">
                                <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>Tecnologia em Análise e Desenvolvimento de Sistemas (2017-atual)</li>
                                            <li>Técnico em Produção Mecânica (2013-2016)</li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>Estágio Setor de Suporte na C.D.S (mar/2018-jun/2018)</li>
                                            <li>Membro da Enactus UTFPR-CP (set/2019-atualmente)</li>
                                            <li>Desenvolvedor na Forlogic (jan/2020-atualmente)</li>
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

import React from 'react';
import { Helpers } from 'react-scroll';

function Info() {
    return(
        <div className="info">
            <div style={{backgroundColor: `#73001A`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#B40028`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#E10032`, width: `100%`, height: `5px`}}></div>
            <div className="container-fluid edu-container">
                <div className="container item-wrapper">
                    <div className="row">

                        <div id="masters" className="col-xs-12 col-sm-6 edu-wrapper">
                            <div className=" edu-item">
                                <div className="title">BIOGRAFIA</div>
                                <hr></hr>
                                <div className="honors-wrapper">
                                <div className="honors-item">
                                       Iniciei minha trajetória realizando Técnico em Produção Mecânica na UTFPR-CP, apesar do ótimo ensino, acabei não gostando desta área.
                                       Então como conhecia bem a faculdade, tentei pesquisar em qual curso dela 
                                       eu me encaixaria melhor. Logo, pelo fato de sempre estar ligado ao mundo 
                                       tecnológico, optei por ingressar em Ánalise em Desenvolvimento de Sistemas, 
                                       por ser um curso mais rápido e em uma área de grande crescimento na sociedade, o 
                                       qual nos capacita para adentrar no mercado de trabalho. 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="bachelors" className="col-xs-12 col-sm-6 edu-wrapper">
                            <div className="edu-item">

                                <div className="title">PROFISSÃO</div>
                                <hr></hr>
                                <div className="honors-wrapper">
                                    <div className="honors-item">
                                        O contato com a tecnologia sempre esteve presente em minha vida, creio que possamos evoluir ainda mais se a explorarmos.
                                        Então com está motivação de criar coisas novas para a sociedade, iniciei o curso de Tecnológo na UTFPR-CP no ano de 2017. 
                                        Dentro do curso e realizando estágios, vi a importância na prática desta área.
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

export default Helpers.Element(Info);

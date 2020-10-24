import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Blogs extends Component {

    render() {
        return(
            <div className="blogs">
                <div style={{backgroundColor: `#7CA982`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#ABC8AF`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid blogs-container">
                    <div className="container item-wrapper">

                        <div className="row">
                            <div className="blogs-item">
                                <div className="blogs-header">
                                    <div className="blogs-title"><div>What is React?</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 blogs-img">
                                <a target="_blank" href="https://en.reactjs.org">
                                        <img
                                            className="img-responsive"
                                            src={require("../images/react.png")}
                                            role={"presentation"} />
                                        </a>
                                </div>
                                <div className="col-xs-12 col-sm-6 blogs-content-wrapper">
                                    <div className="blogs-content">
                                        <br></br>
                                        <div>
                                            &nbsp;
                                            React é uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de 
                                            interfaces de usuário (UI). Crie views simples para cada estado na sua aplicação, e o React 
                                            irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em 
                                            que os dados mudam.
                                        </div>
                                        <br></br>
                                        <div>
                                            &nbsp;
                                            Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para 
                                            criar UIs complexas. Como a lógica do componente é escrita em JavaScript e não em templates, 
                                            você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter 
                                            o estado fora do DOM.
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="blogs-item">
                                <div className="blogs-header">
                                    <div className="blogs-title"><div>What is JavaScript?</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 blogs-img">
                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/js.png")}
                                        role={"presentation"} />
                                    </a>
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 blogs-img-sm">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/react.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 blogs-content-wrapper">
                                    <div className="blogs-content">
                                        <div>
                                            &nbsp;
                                            JavaScript é uma linguagem de programação que pode ser aplicada em um documento HTML 
                                            e usada para criar interações dinâmicas em sites. Ela foi inventada por 
                                            Brendan Eich, co-fundador do projeto Mozilla, da Fundação Mozilla e 
                                            da Corporação Mozilla.
                                        </div>
                                        <br></br>
                                        <div>
                                            &nbsp;
                                            Você pode fazer muita coisa com JavaScript. Você vai começar com coisas simples 
                                            como ajustar layouts, fazer coisas acontecerem quando botões são clicados, slides 
                                            e galerias de imagem — mas a medida que você for ganhando experiência com a 
                                            linguagem, você poderá criar jogos, animações gráficas em 2D e 3D, aplicativos com 
                                            base de dados e muito mais.
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="blogs-item">
                                <div className="blogs-header">
                                    <div className="blogs-title"><div>Cascading Style Sheets </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 blogs-img">
                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/css.jpg")}
                                        role={"presentation"} />
                                    </a>
                                </div>
                                <div className="col-xs-12 col-sm-6 blogs-content-wrapper">
                                    <div className="blogs-content">
                                        <div>
                                            &nbsp;
                                            O CSS é uma ferramenta muito potente que possibilita criar diversas funcionalidades 
                                            ao invés de usar JavaScript ou outra linguagem mais pesada. Se usado com moderação, 
                                            CSS pode viabilizar uma ótima experiência ao desenvolvedor e usuários das páginas web.
                                        </div>
                                        <br></br>
                                        <div>
                                            &nbsp;
                                            Imagine que o seu site tem o fundo todo preto, o background, e o conteúdo é escrito 
                                            em branco, para causar o destaque. Ao invés de criar diversas tags em .html para 
                                            determinar que o conteúdo seja em branco, você pode aplicar de forma automática em 
                                            todas as páginas com uso do CSS. 
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
}

export default Helpers.Element(Blogs);

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
                                    <div className="blogs-title"><div>O que é React?</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 blogs-img">
                                <a target="_blank" href="https://www.devmedia.com.br/react-native-tutorial/32860">
                                        <img
                                            className="img-responsive"
                                            src={require("../images/react.png")}
                                            role={"presentation"} />
                                        </a>
                                </div>
                                <div className="col-xs-12 col-sm-6 blogs-content-wrapper">
                                    <div className="blogs-content">
                                        <div>
                                            &nbsp;
                                            Por se tratar de uma biblioteca nova, com recursos novos, 
                                            muita gente se questiona sobre a real utilidade da mesma, 
                                            e se vale a pena investir em incorporar mais uma tecnologia 
                                            a seus projetos. Por outro lado, muitos desenvolvedores 
                                            consideram a biblioteca eficiente e recomendável, 
                                            principalmente por duas razões:
                                        </div>
                                        <br></br>
                                       <ul>
                                            • Com o React a sua aplicação, bem como toda a lógica interna 
                                            a ela, é toda escrita e executada em JavaScript, o que te possibilita 
                                            ter um UI (User Interface) totalmente nativo. Logo, você não tem de 
                                            assumir nenhum compromisso tipicamente associado ao UI da HTML5. 
                                        </ul>
                                        <br></br>
                                        <ul>
                                            • O React introduz uma abordagem nova e altamente funcional para a 
                                            construção de interfaces de usuário: a interface do usuário é simplesmente
                                             expressa como uma nova função do estado atual do aplicativo. .
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="blogs-item">
                                <div className="blogs-header">
                                    <div className="blogs-title"><div>O que é JavaScript?</div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 blogs-img">
                                <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript">
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
                                            É uma linguagem de programação que pode ser aplicada em um documento HTML 
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
                                <a target="_blank" href="https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css/#gref">
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

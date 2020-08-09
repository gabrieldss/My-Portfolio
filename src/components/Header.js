import React, { Component } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

class Header extends Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {

        });

        Events.scrollEvent.register('end', (to, element) => {

        });

        scrollSpy.update();
    }

    componentWillUnmount() {

    }

    scrollToTop() {

    }

    scrollToBottom() {

    }

    scrollTo() {

    }

    scrollMore() {

    }

    handleSetActive() {

    }

    render() {
        return(
            <div className="header">
                <div className="header-container">
                    <div className="header-menu-items">
                        <div className="menu-item">
                            <Link
                                activeClass="active-home"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Home
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active-experience"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Details
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active-projects"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Projetcs
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active-blogs"
                                to="blogs"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Blogs
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active-info"
                                to="info"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Info
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active-contact"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header


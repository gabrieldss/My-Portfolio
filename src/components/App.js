import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Blogs from './Blogs';
import Info from './Info';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Home name="home"/>
                <Experience name="experience"/>
                <Projects name="projects"/>
                <Blogs name="blogs"/>
                <Info name="info"/>
                <Contact name="contact"/>
                <Footer name="footer"/>
            </div>
        );
    }
}

export default App;

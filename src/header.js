import React, { Component } from 'react'
import resume from './resume.pdf'
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Hi, I'm Rola Khalil Judi <br />
                        <div>
                            <a className="App-links" href={resume}>resume</a> &nbsp;
                            <a className="App-links" href="https://linkedin.com/in/rola-khalil">linkedin</a> &nbsp;
                            <a className="App-links" href="https://github.com/rolakhalil">github</a> &nbsp;
                            <a className="App-links" href="mailto: r4khalil@edu.uwaterloo.ca">email</a>
                        </div>
                    </p>
                </header>
            </div>
        );
    }
}

export default Header;

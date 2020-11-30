import React from 'react'

class Footer extends React.Component {
    render() {
        return (
        <div className="footer">
                <div className="footer-top" onClick={() => window.scrollTo(0,0)}>
                    Back to top
                </div>
                <div className="footer-bottom-container">
                    <div className="footer-bottom-description">
                        <div className="footer-bottom-description-logo">
                            <a href="#">
                                <img src={window.amuzonWhite} alt="Amuzon Logo"/>
                            </a>
                        </div>
                        <div className="footer-words">
                            <div className="footer-bottom-description-top">
                                A-muz-on, is a clone of the popular online marketplace, Amazon
                            </div>
                            <div className="footer-bottom-description-bottom">
                                Created using React, Redux, Javascript, Ruby, and Rails
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-logos">
                        <a href="https://github.com/Muz-98">
                            <img className="footer-github" src={window.logoGithubW} alt="Github"/>
                        </a>

                        <a href="https://www.linkedin.com/in/muzammil-c"> 
                            <img className="footer-linkedin" src={window.logoLinkedinW} alt="Linkedin"/>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;
    
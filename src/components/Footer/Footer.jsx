import React from "react";
import "./Footer.scss";
import Mail from "../../assets/icons8-email-50.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <h1 style={{ color: 'white' }}>Tulip Protocol</h1>
                    <div className="img">
                        Powered by CryptoGem
                    </div>
                </div>
                <div className="col">
                    <div className="title">Developers</div>
                    <span className="text">Docs</span>
                    <span className="text">Relic Explorer</span>
                    <span className="text">Use Cases</span>
                    <span className="text">Github</span>
                </div>
                <div className="col">
                    <div className="title">Community</div>
                    <span className="text">Twitter</span>
                    <span className="text">Medium</span>
                    <span className="text">Discord</span>
                </div>
                <div className="col">
                    <div className="title">General</div>
                    <span className="text">Careers</span>
                    <span className="text">Press Kit</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        © 2023 Tulipi      <a href="/policy/privacy-policy" data-v-390cbd5b="">Privacy Policy</a>
                        <a href="/policy/cookie-policy" data-v-390cbd5b="">Cookie Policy</a>
                    </span>
                    <div className="mail"><img src={Mail} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

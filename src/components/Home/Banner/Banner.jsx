import React from "react";

import "./Banner.scss";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <span>TULIP PROTOCOL</span>
                    <h1>The <strong>Trustless Oracle</strong> for Ethereum’s Historical Data</h1>
                    <p>
                        Tulip Protocol enables dApps to access all of Ethereum’s historical data with maximal security and minimal gas costs without trusting any centralized authority.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Start Building</div>
                        <div className="banner-cta v2">Learn More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

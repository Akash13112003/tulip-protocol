import React from 'react';
import './About.scss';

function About() {
    return (
        <div className="about-container">

            <span>HOW IT WORKS</span>
            <h2>Ready, Set, Action!</h2>
            <div className='cont'>
                <h3>Commitment</h3>
                <p>The ZK Prover rolls up historical data on-chain. This process is trustless and enables cheap and secure access to historical data during verification.</p>
            </div>
            <div className='cont'><h3>Verification</h3>
                <p>The user verifies the historical data that has been stored on-chain and creates a Fact. The Fact is a cryptographic proof that can be used to prove the authenticity and validity of the data.</p>
            </div>
            <div className="cont"><h3>Access</h3>
                <p>The dApp contract uses the Fact to access the stored historical data. This ensures that the data is correct and cannot be manipulated or tampered by anyone.</p>
            </div>
        </div>
    );
}

export default About;

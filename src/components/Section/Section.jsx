import React from 'react';
import "./Section.scss";

const Section = () => {
    const textStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    };

    return (
        <div style={textStyle}>
            <div className='bla' style={{ textAlign: 'center', padding: '20px' }}>
                <h4 style={{ color: 'grey' }}> ABOUT </h4>
                <br />
                <h1 className="head" style={{ fontWeight: '700', fontSize: '40px' }}> Empowering dApps <br /> with Historical Data</h1>
                <br />
                <p style={{ fontSize: '16px', margin: '0 auto' }}> Relic Protocol provides easy and trustless access to all historical Ethereum  <br /> states for on-chain applications. By overcoming the limitation
                    of EVM, it <br /> makes building novel applications that use this wealth of data simple </p>
                <br />
            </div>

            <div >
                <div className="card">
                    <h2 className="card-heading">Trustless</h2>
                    <p className="card-details">
                        <br />
                        Through the use of zk-SNARKs and Merkle-Patricia<br /> Trie proofs, Relic Protocol enables cryptographic<br /> verification of any data on-chain. As a result, dApps<br /> utilizing the Relic Protocol can access historical data<br /> without trusting any third-party intermediary.
                    </p>
                </div>
                <div style={{ display: 'flex' }} className='card-container'>
                    <div className='card-wrapper' style={{ display: 'flex', gap: '20px' }}>
                        <div className="card" style={{ width: '50%' }}>
                            <h2 className="card-heading">Decentralized</h2>
                            <p className="card-details">
                                <br />
                                Relic Protocol's smart contracts are immutable<br /> and permissionless. Anyone can generate a<br /> proof and submit it to the Relic Protocol for<br /> verification. </p>
                        </div>
                        <div className="card" style={{ width: '50%' }}>
                            <h2 className="card-heading">Scalable</h2>
                            <p className="card-details">
                                <br />
                                Relic Protocol’s on-chain state verification is heavily optimized, resulting in minimal gas usage for apps built on Relic Protocol. Developers can easily build efficient history-powered dApps using Relic Protocol’s Solidity and Typescript SDKs. </p>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Section;

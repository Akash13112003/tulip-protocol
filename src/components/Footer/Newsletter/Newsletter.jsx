import React from 'react';
import "./Newsletter.scss";

const Newsletter = () => {
    const textStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '104px',
        textAlign: 'center',
    };

    return (
        <div style={textStyle}>
            <div className='bla' style={{ textAlign: 'center', padding: '30px' }}>
                <h4 style={{ color: 'grey' }}> PRACTICAL EXAMPLES</h4>
                <br />
                <h1 className="head" style={{ fontWeight: '700', fontSize: '40px' }}> Unleash Your Creativity</h1>
                <br />
            </div>

            <div >
                <ul class="cta card" data-v-8e81f31c=""><li data-v-8e81f31c=""><button data-v-8e81f31c=""><span class="gradient-text-white" data-v-8e81f31c="">Effortless
                    Airdrops
                </span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-8e81f31c=""><path d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10">
                </path><path d="M19 14.46L28.54 24L19 33.54" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10"></path>
                    </svg></button></li><li data-v-8e81f31c=""><button data-v-8e81f31c="">
                        <span class="gradient-text-white" data-v-8e81f31c="">Revolutionized on-chain identity</span>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-8e81f31c="">
                            <path d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10"></path><path d="M19 14.46L28.54 24L19 33.54" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10">
                            </path><path d="M19 14.46L28.54 24L19 33.54" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10"></path></svg></button></li><li data-v-8e81f31c=""><button data-v-8e81f31c="">
                                <span class="gradient-text-white" data-v-8e81f31c="">Historical price for any on-chain data</span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-8e81f31c="">
                                    <path d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10"></path><path d="M19 14.46L28.54 24L19 33.54" stroke="#EBEDEE" stroke-width="3" stroke-miterlimit="10">
                                    </path></svg></button></li></ul>

                <section class="dark">
                    <div class="skew-card">
                        <div >
                            <h2 style={{ fontWeight: '700', fontSize: '40px' }} >Build Effortlessly</h2>
                            <p style={{ fontSize: '16px', margin: '0 auto', padding: '30px' }} class="description">Build history-powered dApps with ease using our Solidity and Typescript SDKs,<br /> expertly engineered for maximum efficiency.</p>
                            <ul class="cta default">
                                <li ><a class="primary" style={{ margin: '0 auto' }}>Build Now</a></li>
                            </ul>
                            <div class="skew-card-shine">
                            </div></div></div></section>
            </div>
        </div>
    );
};

export default Newsletter;

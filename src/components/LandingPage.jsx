import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import FYPModule from './FYPModule';
import DegreeClearance from './DegreeClearance';
import Dashboards from './Dashboards';
import WhyChoose from './WhyChoose';
import Security from './Security';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Features />
                <FYPModule />
                <DegreeClearance />
                <Dashboards />
                <WhyChoose />
                <Security />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;

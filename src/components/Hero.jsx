import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background Elements */}
            <div className="hero-bg">
                <div className="hero-blob-1" />
                <div className="hero-blob-2" />
            </div>

            <div className="container hero-container">
                {/* Text Content */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot">
                            <span className="hero-badge-dot-ping"></span>
                            <span className="hero-badge-dot-solid"></span>
                        </span>
                        New Academic Session 2025
                    </div>

                    <h1 className="hero-title">
                        Streamline Your <br />
                        <span className="hero-title-gradient">Academic Journey</span>
                    </h1>

                    <p className="hero-description">
                        LGU GradFlow automates Final Year Projects, Degree Clearance, and academic workflows in one unified, emerald-powered platform.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg">
                            Get Started Now <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-outline btn-lg">
                            View Demo
                        </button>
                    </div>

                    <div className="hero-features">
                        <div className="hero-feature">
                            <CheckCircle size={16} className="hero-feature-icon" />
                            <span>Automated Workflows</span>
                        </div>
                        <div className="hero-feature">
                            <CheckCircle size={16} className="hero-feature-icon" />
                            <span>Real-time Tracking</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content */}
                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <div className="hero-image">
                            <div className="hero-image-placeholder">
                                <div className="hero-image-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                        <line x1="3" x2="21" y1="9" y2="9" />
                                        <line x1="9" x2="9" y1="21" y2="9" />
                                    </svg>
                                </div>
                                <h3 className="hero-image-title">Dashboard Preview</h3>
                                <p className="hero-image-desc">Interactive student and faculty portals</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hero-decoration-1" />
                    <div className="hero-decoration-2" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

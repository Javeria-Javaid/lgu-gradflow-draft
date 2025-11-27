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
                            <img
                                src="/hero-dashboard.png"
                                alt="LGU GradFlow Dashboard Preview"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                            />
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

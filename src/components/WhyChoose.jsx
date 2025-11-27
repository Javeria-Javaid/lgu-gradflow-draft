import React from 'react';
import { Zap, Heart, Globe, Clock } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="section why-choose">
            <div className="why-choose-bg"></div>

            <div className="container why-choose-container">
                <div className="why-choose-content">
                    <span className="why-choose-eyebrow">Why GradFlow?</span>
                    <h2 className="why-choose-title">Transforming University Operations</h2>
                    <p className="why-choose-description">
                        We understand the challenges of academic management. GradFlow isn't just software; it's a strategic partner in your university's digital transformation journey.
                    </p>

                    <div className="why-choose-grid">
                        {[
                            { icon: <Zap />, title: "50% Faster", desc: "Reduce processing time for clearances and approvals significantly." },
                            { icon: <Heart />, title: "User Centric", desc: "Designed with empathy for students and faculty needs." },
                            { icon: <Globe />, title: "Eco-Friendly", desc: "Save thousands of sheets of paper every semester." },
                            { icon: <Clock />, title: "24/7 Access", desc: "The university never closes with our always-on cloud platform." }
                        ].map((item, index) => (
                            <div key={index} className="why-choose-item">
                                <div className="why-choose-item-icon">
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="why-choose-sidebar">
                    <div className="why-choose-testimonial">
                        <h3>"GradFlow has completely changed how we handle our final year projects. It's intuitive, fast, and reliable."</h3>
                        <div className="why-choose-testimonial-author">
                            <div className="why-choose-testimonial-avatar">JD</div>
                            <div className="why-choose-testimonial-info">
                                <p>John Doe</p>
                                <p>Head of CS Department, LGU</p>
                            </div>
                        </div>
                    </div>

                    <div className="why-choose-cta">
                        <h3>Ready to modernize your campus?</h3>
                        <p>Join the growing number of departments switching to GradFlow.</p>
                        <button className="btn btn-white">Schedule a Consultation</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

import React from 'react';
import { FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const DegreeClearance = () => {
    return (
        <section className="section degree-clearance">
            <div className="container clearance-container">
                <div className="clearance-content">
                    <span className="clearance-eyebrow">Degree Clearance</span>
                    <h2 className="clearance-title">Hassle-Free Graduation Process</h2>
                    <p className="clearance-description">
                        No more running between departments. Initiate, track, and complete your degree clearance process entirely online.
                    </p>

                    <div className="clearance-features">
                        {[
                            {
                                icon: <FileText className="text-blue-500" />,
                                title: "Digital Initiation",
                                desc: "Start your clearance application with a single click. No paperwork required."
                            },
                            {
                                icon: <Clock className="text-amber-500" />,
                                title: "Real-Time Tracking",
                                desc: "See exactly which department is reviewing your application and avoid delays."
                            },
                            {
                                icon: <AlertCircle className="text-red-500" />,
                                title: "Instant Feedback",
                                desc: "Get notified immediately if any dues are pending or documents are missing."
                            },
                            {
                                icon: <CheckCircle className="text-green-500" />,
                                title: "Automated Certification",
                                desc: "Receive your digital clearance certificate automatically upon completion."
                            }
                        ].map((item, index) => (
                            <div key={index} className="clearance-feature">
                                <div className="clearance-feature-icon">
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <div className="clearance-feature-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="clearance-visual">
                    <div className="clearance-card" style={{ padding: 0, overflow: 'hidden', border: 'none', background: 'transparent', boxShadow: 'none' }}>
                        <img
                            src="/clearance-mockup.png"
                            alt="Degree Clearance Tracker"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />
                    </div>

                    <div className="clearance-visual-bg"></div>
                </div>
            </div>
        </section>
    );
};

export default DegreeClearance;

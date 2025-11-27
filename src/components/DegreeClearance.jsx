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
                    <div className="clearance-card">
                        <div className="clearance-card-header">
                            <div className="clearance-card-info">
                                <h3>Clearance Status</h3>
                                <p>Student ID: 2021-LGU-1234</p>
                            </div>
                            <span className="clearance-status-badge">In Progress</span>
                        </div>

                        <div className="clearance-departments">
                            {[
                                { dept: "Library", status: "Cleared", time: "2 days ago", icon: <CheckCircle size={18} style={{ color: '#10B981' }} /> },
                                { dept: "Finance", status: "Pending Dues", time: "Action Required", icon: <AlertCircle size={18} style={{ color: '#EF4444' }} /> },
                                { dept: "IT Department", status: "Cleared", time: "1 day ago", icon: <CheckCircle size={18} style={{ color: '#10B981' }} /> },
                                { dept: "Exam Branch", status: "Processing", time: "Est. 24h", icon: <Clock size={18} style={{ color: '#FBBF24' }} /> },
                            ].map((dept, i) => (
                                <div key={i} className="clearance-department">
                                    <div className="clearance-dept-left">
                                        {dept.icon}
                                        <span className="clearance-dept-name">{dept.dept}</span>
                                    </div>
                                    <div className="clearance-dept-right">
                                        <span className="clearance-dept-status" style={{ color: dept.status === 'Pending Dues' ? '#EF4444' : '#1E293B' }}>{dept.status}</span>
                                        <span className="clearance-dept-time">{dept.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="clearance-progress">
                            <p>Overall Progress</p>
                            <div className="clearance-progress-bar">
                                <div className="clearance-progress-fill" style={{ width: '65%' }}></div>
                            </div>
                            <span className="clearance-progress-text">65% Completed</span>
                        </div>
                    </div>

                    <div className="clearance-visual-bg"></div>
                </div>
            </div>
        </section>
    );
};

export default DegreeClearance;

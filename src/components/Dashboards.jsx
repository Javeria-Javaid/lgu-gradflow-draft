import React, { useState } from 'react';
import { GraduationCap, UserCog, ShieldCheck } from 'lucide-react';

const Dashboards = () => {
    const [activeTab, setActiveTab] = useState('student');

    const tabs = [
        { id: 'student', label: 'Student', icon: <GraduationCap size={20} /> },
        { id: 'supervisor', label: 'Supervisor', icon: <UserCog size={20} /> },
        { id: 'admin', label: 'Admin', icon: <ShieldCheck size={20} /> }
    ];

    const content = {
        student: {
            title: "Student Command Center",
            desc: "Everything a student needs to navigate their final year. Submit proposals, track clearance, view grades, and communicate with supervisors in one place.",
            features: ["Proposal Submission", "Clearance Tracking", "Meeting Scheduler", "Resource Library"]
        },
        supervisor: {
            title: "Supervisor Management Suite",
            desc: "Tools to efficiently manage multiple student groups. Review submissions, provide feedback, grade milestones, and track overall progress effortlessly.",
            features: ["Batch Approvals", "Plagiarism Checking", "Grading Rubrics", "Progress Analytics"]
        },
        admin: {
            title: "Administrative Oversight",
            desc: "Complete visibility into the university's academic workflows. Manage users, configure deadlines, generate reports, and ensure compliance.",
            features: ["User Management", "System Configuration", "Audit Logs", "Global Reporting"]
        }
    };

    return (
        <section id="dashboards" className="section dashboards">
            <div className="container">
                <div className="dashboards-header">
                    <span className="dashboards-eyebrow">Role-Based Access</span>
                    <h2 className="dashboards-title">Tailored Experiences for Everyone</h2>
                    <p className="dashboards-description">
                        Dedicated dashboards designed to meet the specific needs of students, faculty, and administrators.
                    </p>
                </div>

                <div className="dashboards-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`dashboard-tab ${activeTab === tab.id ? 'active' : ''}`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="dashboards-content">
                    <div className="dashboard-content-grid">
                        <div className="dashboard-content-text">
                            <h3 className="dashboard-content-title">{content[activeTab].title}</h3>
                            <p className="dashboard-content-description">{content[activeTab].desc}</p>
                            <ul className="dashboard-features-list">
                                {content[activeTab].features.map((feature, index) => (
                                    <li key={index} className="dashboard-feature-item">
                                        <div className="dashboard-feature-dot"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-outline">
                                Explore {tabs.find(t => t.id === activeTab).label} Features
                            </button>
                        </div>

                        <div className="dashboard-content-visual">
                            <img
                                src={`/dashboard-${activeTab}.png`}
                                alt={`${tabs.find(t => t.id === activeTab).label} Dashboard Interface`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 'var(--radius-md)',
                                    boxShadow: 'var(--shadow-lg)',
                                    border: '1px solid var(--color-neutral-200)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboards;

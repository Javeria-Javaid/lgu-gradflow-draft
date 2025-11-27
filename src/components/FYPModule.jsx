import React from 'react';
import { GitBranch, Users, FileCheck, MessageSquare } from 'lucide-react';

const FYPModule = () => {
    return (
        <section className="section fyp-module">
            <div className="container fyp-container">
                <div className="fyp-visual">
                    <div className="fyp-visual-bg"></div>
                    <div className="fyp-visual-card">
                        <div className="fyp-workflow">
                            {[
                                { title: "Proposal Submission", status: "Approved", statusClass: "status-approved" },
                                { title: "Supervisor Allocation", status: "Assigned", statusClass: "status-assigned" },
                                { title: "Mid-Term Evaluation", status: "Pending", statusClass: "status-pending" },
                                { title: "Final Defense", status: "Locked", statusClass: "status-locked" },
                            ].map((item, i) => (
                                <div key={i} className="fyp-workflow-item">
                                    <span className="fyp-workflow-title">{item.title}</span>
                                    <span className={`fyp-workflow-status ${item.statusClass}`}>{item.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="fyp-content">
                    <span className="fyp-eyebrow">FYP Management</span>
                    <h2 className="fyp-title">Master Your Final Year Project</h2>
                    <p className="fyp-description">
                        A comprehensive suite of tools to guide students and supervisors through the entire FYP lifecycle, from proposal to final defense.
                    </p>

                    <div className="fyp-features">
                        {[
                            { icon: <FileCheck />, title: "Streamlined Proposals", desc: "Submit and revise project proposals with version control." },
                            { icon: <Users />, title: "Smart Group Formation", desc: "Form teams and request supervisors effortlessly." },
                            { icon: <GitBranch />, title: "Milestone Tracking", desc: "Track progress against defined milestones and deadlines." },
                            { icon: <MessageSquare />, title: "Direct Feedback", desc: "Receive real-time feedback and grading from supervisors." }
                        ].map((item, index) => (
                            <div key={index} className="fyp-feature">
                                <div className="fyp-feature-icon">
                                    {React.cloneElement(item.icon, { size: 20 })}
                                </div>
                                <div className="fyp-feature-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FYPModule;

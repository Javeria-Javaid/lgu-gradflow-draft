import React from 'react';
import { Shield, Lock, Server, Eye } from 'lucide-react';

const Security = () => {
    return (
        <section className="section security">
            <div className="container">
                <div className="security-header">
                    <span className="security-eyebrow">Security & Compliance</span>
                    <h2 className="security-title">Your Data, Safe and Secure</h2>
                    <p className="security-description">
                        We prioritize the privacy and security of your academic records with industry-leading standards.
                    </p>
                </div>

                <div className="security-grid">
                    {[
                        {
                            icon: <Lock />,
                            title: "End-to-End Encryption",
                            desc: "All data is encrypted in transit and at rest using AES-256 standards."
                        },
                        {
                            icon: <Shield />,
                            title: "Role-Based Access",
                            desc: "Strict access controls ensure users only see what they are authorized to see."
                        },
                        {
                            icon: <Server />,
                            title: "Daily Backups",
                            desc: "Automated backups ensure your data is never lost, with quick recovery options."
                        },
                        {
                            icon: <Eye />,
                            title: "Audit Logging",
                            desc: "Comprehensive logs of all system activities for accountability and compliance."
                        }
                    ].map((item, index) => (
                        <div key={index} className="security-item">
                            <div className="security-item-icon">
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Security;

import React from 'react';
import { Users, FileText, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-header">
                    <h2 className="about-title">Revolutionizing Academic Management</h2>
                    <p className="about-description">
                        LGU GradFlow is designed to bridge the gap between students, faculty, and administration.
                        By digitizing complex workflows like Final Year Projects and Degree Clearance, we ensure
                        transparency, efficiency, and a seamless academic experience.
                    </p>
                </div>

                <div className="about-stats">
                    {[
                        {
                            icon: <Users size={32} />,
                            count: "500+",
                            label: "Active Students",
                            desc: "Currently using the platform for their academic needs."
                        },
                        {
                            icon: <FileText size={32} />,
                            count: "150+",
                            label: "Projects Managed",
                            desc: "Final year projects tracked from proposal to completion."
                        },
                        {
                            icon: <Award size={32} />,
                            count: "45+",
                            label: "Faculty Members",
                            desc: "Supervisors and administrators using the system."
                        }
                    ].map((stat, index) => (
                        <div key={index} className="about-stat">
                            <div className="about-stat-icon">
                                {stat.icon}
                            </div>
                            <h3 className="about-stat-count">{stat.count}</h3>
                            <h4 className="about-stat-label">{stat.label}</h4>
                            <p className="about-stat-desc">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

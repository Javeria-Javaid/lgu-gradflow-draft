import React from 'react';
import { Layout, CheckSquare, Bell, BarChart2, Shield, Smartphone } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Layout />,
            title: "Centralized Dashboard",
            desc: "Access all your academic tasks, deadlines, and notifications in one intuitive interface."
        },
        {
            icon: <CheckSquare />,
            title: "Smart Degree Clearance",
            desc: "Automated clearance process with real-time tracking across all departments."
        },
        {
            icon: <Bell />,
            title: "Instant Notifications",
            desc: "Stay updated with real-time alerts for approvals, deadlines, and announcements."
        },
        {
            icon: <BarChart2 />,
            title: "Advanced Analytics",
            desc: "Comprehensive insights for administrators to monitor student progress and department efficiency."
        },
        {
            icon: <Shield />,
            title: "Secure Data",
            desc: "Enterprise-grade security ensuring your academic records and personal data are protected."
        },
        {
            icon: <Smartphone />,
            title: "Mobile Responsive",
            desc: "Fully optimized experience across all devices - desktop, tablet, and mobile."
        }
    ];

    return (
        <section id="features" className="section features">
            <div className="container">
                <div className="features-header">
                    <span className="features-eyebrow">Key Features</span>
                    <h2 className="features-title">Everything You Need to Succeed</h2>
                    <p className="features-description">
                        Powerful tools tailored for the modern academic environment.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {React.cloneElement(feature.icon, { size: 24 })}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

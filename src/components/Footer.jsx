import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <GraduationCap size={20} />
                            </div>
                            <span className="footer-logo-text">
                                LGU <span className="footer-logo-accent">GradFlow</span>
                            </span>
                        </div>
                        <p>
                            Empowering universities with next-generation workflow automation tools. Simplifying education, one process at a time.
                        </p>
                        <div className="footer-social">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {['Home', 'Features', 'About Us', 'Pricing', 'Contact'].map((link, i) => (
                                <li key={i}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            {['Student Guide', 'Faculty Handbook', 'API Documentation', 'System Status', 'Privacy Policy'].map((link, i) => (
                                <li key={i}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li className="footer-contact-item">
                                <MapPin size={20} className="footer-contact-icon" />
                                <span>Lahore Garrison University,<br />Main Campus, DHA Phase 6,<br />Lahore, Pakistan</span>
                            </li>
                            <li className="footer-contact-item">
                                <Phone size={20} className="footer-contact-icon" />
                                <span>+92 42 12345678</span>
                            </li>
                            <li className="footer-contact-item">
                                <Mail size={20} className="footer-contact-icon" />
                                <span>support@lgu.edu.pk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 LGU GradFlow. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

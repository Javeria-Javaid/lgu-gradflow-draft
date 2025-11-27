import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="cta">
            <div className="container">
                <h2 className="cta-title">Ready to Streamline Your Academic Journey?</h2>
                <p className="cta-description">
                    Join thousands of students and faculty members already using GradFlow to simplify their university life.
                </p>
                <div className="cta-actions">
                    <button className="btn btn-white btn-lg">
                        Get Started Now
                    </button>
                    <button className="btn btn-outline btn-lg">
                        Request Demo <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;

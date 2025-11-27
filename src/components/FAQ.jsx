import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How do I register for an account?",
            answer: "Accounts are automatically created based on university enrollment data. You can log in using your official university email address and default password provided by the IT department."
        },
        {
            question: "Can I access GradFlow from my mobile phone?",
            answer: "Yes! GradFlow is fully responsive and works seamlessly on all smartphones and tablets, allowing you to track your progress on the go."
        },
        {
            question: "What happens if my supervisor rejects my proposal?",
            answer: "If your proposal is rejected, you will receive immediate feedback with comments. You can then revise your proposal and resubmit it through the portal for approval."
        },
        {
            question: "Is my data shared with third parties?",
            answer: "No. Your academic data is strictly confidential and is only accessible by authorized university personnel for administrative purposes."
        },
        {
            question: "How long does the degree clearance process take?",
            answer: "With GradFlow, the average clearance time is reduced to 2-3 days, compared to weeks with the manual process, depending on your department's responsiveness."
        }
    ];

    return (
        <section id="faq" className="section faq">
            <div className="container faq-container">
                <div className="faq-sidebar">
                    <span className="faq-eyebrow">Support</span>
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-sidebar-description">
                        Can't find the answer you're looking for? Contact our support team.
                    </p>
                    <button className="btn btn-primary">Contact Support</button>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span>{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="faq-question-icon" />
                                ) : (
                                    <Plus className="faq-question-icon" />
                                )}
                            </button>
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

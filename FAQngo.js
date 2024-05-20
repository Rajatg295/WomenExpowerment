import React from 'react';

const FAQSection = () => {
    const faqData = [
        { question: 'How can I register my organization?', answer: 'You can register your organization by visiting the Registration page and filling out the required details.' },
        { question: 'What are the funding norms for NGOs?', answer: 'The funding norms for NGOs are outlined on the Funding Norms page. You can find detailed information there.' },
        { question: 'What is the status of my application?', answer: 'You can check the status of your application in the Status section of the NGO dashboard.' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">FAQ Section</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                <div>
                    {faqData.map((item, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                            <p className="text-gray-700">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;

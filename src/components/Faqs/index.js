// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
    const { faqsList } = props

    return (
        <div className="bg_container">
            <div className="card">
                <h1 className="b">FAQs</h1>
                <ul className="faq">
                    {faqsList.map(eachFaq => (
                        <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Faqs

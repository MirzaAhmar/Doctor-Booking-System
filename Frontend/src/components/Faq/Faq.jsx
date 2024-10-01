import React from 'react'
import { faqImg } from '../../assets/images';
import FaqList from './FaqList';
const Faq = () => {
    return (
        <div>
            <section id='faq'>
                <div className="container">
                    <div className="row gap-md-0 gap-4 flex-md-row flex-column-reverse">
                        <div className="col-md-6">
                            <figure><img src={faqImg} alt="faqImg" /></figure>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2>Most questions by our beloved patients</h2>
                                <FaqList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq

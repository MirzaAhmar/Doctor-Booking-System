import { faStar, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    return (
        <section id='reviews'>
            <h3>272 Reviews</h3>
            {[...Array(5).keys()].map((_, index) => (
                <FontAwesomeIcon icon={faStar} key={index} style={{ color: 'orange', fontSize: '17px' }} />
            ))}
            <div className='rev_user'>
                <div className='d-flex align-items-center gap-3 mt-3'>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='d-flex gap-2'>
                        <h6>talha Aslam</h6>
                        <h6>29/04/2024</h6>
                    </div>
                </div>

                <div className='d-flex align-items-center gap-2 py-3'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <h5>I am satisfied with the doctor.</h5>
                </div>
                <p className='para'>The doctor was very polite and humble. Listened carefully and advised the problem within 5 min. Alhumdulillah, I am satisfied and reviewing after 3 days, I am feeling very good and healthy now. Thank you very much Dr Umer Mushtaq</p>
                <hr />
            </div>
            {
                !showFeedbackForm && <div className='d-flex justify-content-center mt-5'>
                    <button onClick={() => setShowFeedbackForm(true)} className='btn btn-primary'>Post a Review</button>
                </div>
            }

            {
                showFeedbackForm && <FeedbackForm />
            }

        </section>
    )
}

export default Feedback

import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const FeedbackForm = () => {
  const [reviewText, setReviewText] = useState('')
  const [satisfyStatus, setSatisfyStatus] = useState('')
  const handleSubmitReview = async e => {
    e.preventDefault()
    // we will use api
  }
  return (
    <form className='reviewForm'>
      <h6 className='text-center'>Were you satisfied with your overall experience?</h6>
      <div className="like feedback-buttons mb-4">
        <label className={`feedback-button ${satisfyStatus == 'yes' && 'bg-grey'}`} onClick={() => setSatisfyStatus('yes')}>
          <span className="thumb-up"><FontAwesomeIcon icon={faThumbsUp} /></span>
          <div className='d-flex gap-2 mt-3'>
            <input type="radio" name="feedback" value="yes" />
            <span>Yes</span>
          </div>
        </label>
        <label className={`feedback-button ${satisfyStatus == 'no' && 'bg-grey'}`} onClick={() => setSatisfyStatus('no')}>
          <span className="thumb-down"><FontAwesomeIcon icon={faThumbsDown} /></span>
          <div className='d-flex gap-2 mt-3'>
            <input type="radio" name="feedback" value="no" />
            <span>No</span>
          </div>
        </label>
      </div>

      <div>
        <h6>Share your feedback & suggestion</h6>
        <textarea rows="8" placeholder='Write your story'
          value={reviewText}
          onChange={e => setReviewText(e.target.value)}
        >
        </textarea>
        <p className='para py-3'>Write Carefully. Your experience can help other lives.</p>
        <button className='btn btn-primary d-block mx-auto mt-4' type='submit' onClick={handleSubmitReview}>Submit</button>
      </div>
    </form>
  )
}

export default FeedbackForm

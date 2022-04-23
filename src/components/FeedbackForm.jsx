import PropTypes from 'prop-types'
import {useState, useContext, useEffect} from 'react'
import Buttton from '../shared/Buttton'
import Card from '../shared/Card'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback,feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
      if(feedbackEdit.edit === true){
          setbtnDisabled(false)
          setText(feedbackEdit.item.text)
          setRating(feedbackEdit.item.rating)
      }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else{
            setbtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    

    const handleSubmt = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else{

                addFeedback(newFeedback)
            }
            setText('')
        }
    }
  return (
   <Card>
       <form onSubmit={handleSubmt}>
           <h4>How would you rate your service with us?</h4>
           <RatingSelect select={(rating) => setRating(rating)}/>
           <div className='input-group'>
               <input onChange={handleTextChange} 
               value={text} type='text' placeholder="your feedback.." />
               <Buttton type='submit' isDisabled={btnDisabled}>Send </Buttton>
           </div>
           {message && <div className='message'>{message}</div>}
       </form>
   </Card>
  )
}

FeedbackForm.propTypes = {
    text: PropTypes.string.isRequired
}

export default FeedbackForm
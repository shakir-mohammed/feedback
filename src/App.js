import {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'


function App () {
   const [feedback, setFeedback] = useState(FeedbackData)

   const deleteFeedback =(id) => {
      if(window.confirm('Are you sure to delete')){
         setFeedback(feedback.filter((item) => item.id !== id))
      }
   }

   // useEffect(() => {
   //    const resolv = JSON.parse(localStorage.getItem('data'))
   //    if(resolv){
   //            setFeedback(resolv)
   //        }
   //    },[])
      
   //    useEffect(() => {
   //     localStorage.setItem('data', JSON.stringify(feedback))
      
   //    },[feedback])
      
    
   return (
       <>
          <Header />
          <div className='container'>
             <FeedbackList feedback={feedback}
             handleDelete={deleteFeedback}/>
          </div>
       </>
      
      
      
      )
   }
   
   
   export default App
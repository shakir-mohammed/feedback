import {Link} from 'react-router-dom'
import Card from "../shared/Card"


function AboutPage() {
  return (
    <Card> 
        <div className="about">
            <h4>About this Application</h4>
            <p>This a react app to leave a feedback for a service or product</p>
            <p>Version 1.0.0</p>
            <Link to="/">Back to home</Link>
        </div>
    </Card>
  )
}

export default AboutPage
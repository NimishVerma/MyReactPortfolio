import React from "react"
import ExperienceChild from "./ExperienceChild";
import './Education.css'
function Education(props) {
  return (
    <div>
         <div className={'myTimeline'}>
            <div className={'left message'}>
                <div className={'content '}>University of Windsor, ON, Canada <span> </span><br/>MSc in Computer Science  (2019-2021)</div>
            </div>
            <div className={'right message'}>
                <div className={'content'}>GGSIPU, Delhi, India <br/>B.Tech. in Computer Science (2015-2019)</div>
            </div>
             <div className={'left message'}>
                <div className={'content'}>The Heritage School, Delhi<br/>High School (2015)</div>
            </div>
        </div>
    </div>
  )
}

export default Education;
import React from "react"
import ExperienceChild from "./ExperienceChild";
import './Experience.css';
import vdesk from './vdesk.jpeg';
import uw from './UW.png';
import naustone from './NaustoneLogo.png'
import eandv from './EV.jpg'

function Experience(props) {
  return (
    <div className={'experienceFlex'}>
        <ExperienceChild job_title={"Full Stack Developer"} companyname={"Engel & Völkers Americas"} logo={eandv} duration={'January 2021-Present'} location={"Toronto, ON"}/>
        <ExperienceChild job_title={'Research and Graduate Assistant'} description="->Developed real-scale simulator to study the spread of coronavirus in an actual society.
->Achieved recognition for work in form of monetary funding by MITACS.
->Analyzed huge amounts of data (200+ GB) to study patterns and detect anomalies.
->Detected various real scam campaigns that run on social media by luring people to call them.
->Analysed the data using RegEx and mined information regarding scammers.
" companyname={'University of Windsor'} logo={uw} duration={'September 2019 - December 2020'} location={"Windsor, ON"}/>
        <ExperienceChild job_title={'Full Stack Developer Intern'} description="->Built an ETL for mining large amount of data from PDFs from publicly available websites that improved the data quality and quantity by 100%.
->Implemented Celery and RabbitMQ asynchronous task management that was able to reduce server load and improve response time for the customers.
->Designed front-end suing JavaScript and HTML and implemented a payment-gateway integration that was able to attract more clients to quickly sign-up.

->Integrated SSO services to the main-app login that attracted more 50% more signups.
" companyname={'VakilDesk'} logo={vdesk} duration={'June 2018 - April 2019'} location={"Delhi, India"}/>
        <ExperienceChild job_title={'ML Developer Intern'} description="
->Analysed Time Series data and performed Trend Analysis on top currency pairs to generate signals on best-performing pairs.
->Contained and Deployed Docker Images consisting of the ML models and Bash scripts.
" companyname={'NaustoneTrades'} logo={naustone} duration={'May 2018 - June 2018'} location={"Arlington, TX (Remote)"} />
    </div>

  )
}

export default Experience;
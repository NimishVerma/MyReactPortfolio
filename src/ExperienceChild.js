import React from "react"

const ExperienceChild = (props) => {
    const str = props.description;
    var splitstr=[];
    try {
        splitstr = str.split('->',6);
        splitstr.shift();
        console.log(splitstr)
    }
    catch(err){
        console.log(err)
        splitstr = [];
    }
    // console.log(splitstr)
    return(<div className={'experienceChild'}>
        <div className={'LeftCompanyInfo'}><div className={'companyDetail'}><h3>{props.companyname}</h3></div>
        <div className={'companyLogo companyDetail'}>
            <img src={props.logo} alt={props.companyname+" logo"}/>
        </div>
        <div className={'companyDetail jobtitle'}><h3>{props.job_title}</h3></div>
        <div className={'companyDetail'}><i>{props.duration}</i><br/></div>
        {/*<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"/></svg>*/}
        <div className={'companyDetail'}><i>{props.location}</i></div>
        </div>
        {splitstr.length>1?
        <div className={'RightCompanyInfo'}>

        <ul>
            {splitstr.map((item)=> <li>{item}</li>)}
        </ul>
        </div>
            :null}
    </div>)
}

export default ExperienceChild

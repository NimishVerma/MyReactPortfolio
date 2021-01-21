import React, {Fragment} from "react"
import mypic from './my_pic.jpeg';
import './Skills.css'
const Skills = (props) => {
    return(<div className={'skill_div'}>
        <article className={'intro_container'}>
            <h1> <span>Hello</span>, I am Nimish Verma, a Full-Stack Developer based in Toronto.
             <br/>  I'm an MSc. graduate from the University of Windsor, ON.
            </h1>
            <br/><br/><br/><br/><br/>

            <div className={'social_box'}>
            <a href={'https://github.com/Nimishverma'}>Github </a>
            <a href={'https://www.linkedin.com/in/nimishcodes/'}>LinkedIn </a>
            <a href={'https://medium.com/@nimishverma'}>Medium </a>
            </div>

        </article>
        <div className={'code_container'}>
            <code>
            [[author]] <br/>
            name="Nimish Verma"<br/>
            url="github.com/nimishverma"<br/>
            graduated=True<br/>
            highest_degree="Master's"<br/>
            <br/>
            [dev-skills]<br/>
            python="django flask"<br/>
            java="repastsymphony"<br/>
            web="html/css/js"<br/>
            bash<br/>
            <br/>
            [includes]<br/>
            REST<br/>
            pandas<br/>
            nginx<br/>
            crontab<br/>
            tensorflow<br/>
            docker<br/>
            aws="ec2 lambda"<br/>
<br/>
            [database]<br/>
            mysql<br/>
            mongodb<br/>
            postgresql<br/>
     <br/>
          [dev-dependencies]<br/>
          tea<br/>
          music<br/>
          pycharm<br/>
          accountability<br/>



            </code>
        </div>
        {/*<div className={'image_container'}>*/}
        {/*    <img  className={'MyPicture'} src={mypic}/>*/}
        {/*</div>*/}
    </div>)
}

export default Skills;
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
            <a className="Github" href={'https://github.com/Nimishverma'}><svg viewBox="0 0 128 128">
<g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
</svg>Github </a>
            <a className="Linkedin" href={'https://www.linkedin.com/in/nimishcodes/'}><svg viewBox="0 0 128 128">
<g id="original"><path fill="#0076b2" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"></path><path fill="#fff" d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"></path><path fill="#fff" d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"></path></g>
</svg>LinkedIn </a>
            <a className="Medium" href={'https://medium.com/@nimishverma'}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg>Medium </a>
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
            bash <span className={"adding"}></span> <br/>
            <br/>
            [includes]<br/>
            REST<br/>
            pandas<br/>
            nginx<br/>
            crontab<br/>
            tensorflow<br/>
            docker<br/>
            aws="ec2 lambda" <span className={"adding"}></span><br/>
<br/>
            [database]<br/>
            mysql<br/>
            mongodb<br/>
            postgresql <span className={"adding"}></span><br/>
     <br/>
          [dev-dependencies]<br/>
          tea<br/>
          music<br/>
          pycharm<br/>
          accountability<br/>



            </code>
            <br/>
            <footer>
            #always learning new things
        </footer>
        </div>
        {/*<div className={'image_container'}>*/}
        {/*    <img  className={'MyPicture'} src={mypic}/>*/}
        {/*</div>*/}

    </div>)
}

export default Skills;
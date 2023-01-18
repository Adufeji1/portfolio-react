import './Skills.css';
import { FaCss3Alt } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";


function Skills() {
  return (
    <>
    <div className='bgskills'>
      <h1 className='headingstyle'>SKILLS</h1>
    <div className='position'>
      
      <p className='textstyle1'><DiHtml5 className='iconstyle1'/> Html5</p>

      <p className='textstyle2'><FaCss3Alt className='iconstyle2'/>CSS3</p>

      <p className='textstyle3'><DiReact className='iconstyle3'/>React</p>

      <p className='textstyle4'><DiGithub className='iconstyle4'/>Github</p>

      <p className='textstyle5'><DiJsBadge className='iconstyle5'/>Javascript</p>
      </div>
    </div>
    </>
  )
}

export default Skills;
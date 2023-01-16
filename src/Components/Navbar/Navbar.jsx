import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faD } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <>
    <div className='bgnav'>
    <div>
    <FontAwesomeIcon icon={faD} className='logo'></FontAwesomeIcon>
    <p className='logop'>DAmIlOlA</p>
    <div className='navlist'>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
        </div>
        <a href="/"><button className='btnhire'>Hire Me</button></a>
    </div>

    <div className='textsection'>
        <h1 className='text1'>I'm Damilola Awopegba</h1>
        <h2 className='text2'>Frontend (React) Developer</h2>
        <p className='textp'>Experienced front-end web developer who is adept in all stages of web development. She is knowledgeable in the user interface, writing codes, testing, and debugging processes. I am bringing forth my expertise in web development, design, analysis, testing, and maintenance. I am well-equipped with a diverse promising skill set and proficient in different technologies including HTML, CSS, JavaScript, React, Typescript, and Tailwindcss. Able to effectively self-manage during independent projects and collaborate in a team setting</p>
    </div>

    <div className='profileimg'>
        <div className='iconstyle'>
        <a href="https://twitter.com/Adufeeji1"><FontAwesomeIcon icon={faTwitter} className='icon'></FontAwesomeIcon></a>

        <a href="https://web.facebook.com/olabiyi.damilolamary.7/"><FontAwesomeIcon icon={faFacebook} className='icon'></FontAwesomeIcon></a>

        <a href="https://www.linkedin.com/in/damilola-awopegba-1685b4156/ "><FontAwesomeIcon icon={faLinkedinIn} className='icon'></FontAwesomeIcon></a>
    </div>

    </div>
    </div>
    </>
  )
}

export default Navbar;
import './Projects.css';

const Projects = () => {
  return (
    <>
    <div className='bgprojects'>
        <h1 className='projectwork'>PROJECTS</h1>
        <div className='bgimg'>
        <div className='webdapp'>
            <a href="https://github.com/Adufeji1/Web3dapps-Frontend"><button className='button'>Source code</button></a>
            <a href="https://beamish-strudel-5b60e6.netlify.app/"><button className='button'>View Site</button></a>
            <p className='ptext1'>A WEB3 NFT APPLICATION DESIGNED WITH REACT</p>
        </div>
        </div>

        <div className='bgimg2'>
        <div className='flower'>
            <a href="https://github.com/Adufeji1/sign-up-form"><button className='button'>Source code</button></a>
            <a href="https://sprightly-sunflower-ba8247.netlify.app//"><button className='button'>View Site</button></a>
            <p className='ptext'> A singup form for a flower shop using htnl and css</p>
        </div>
        </div>

    <div className='review'>
        <div className='reviewApp'>
            <a href="https://github.com/Adufeji1/react-introductory"><button className='button'>Source code</button></a>
            <a href="https://effulgent-hotteok-71f653.netlify.app/"><button className='button'>View Site</button></a>
            <p className='text3'>A REVIEW APPLICATION CREATED USING REACT</p>
            </div>
        </div>

        <div className='university'>
        <div className='universitywebsite'>
            <a href="https://github.com/Adufeji1/UPDATEDWEBDEV_ASSIGNMENT"><button className='button'>Source code</button></a>
            <a href="https://venerable-gumption-366bee.netlify.app/"><button className='button'>View Site</button></a>
            <p className='text3'>A Responsive University website</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects;
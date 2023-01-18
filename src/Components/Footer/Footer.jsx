import './footer.css';

const Footer = () => {
  return (
    <>
    <div className='footerbg'>
        <h1 className='hone'>Would you like to reach me?</h1>

    <div className='footerform'>    
    <form className='formclass'>
    <label for="inputnumber1">Name:</label>
    <input type="text" id="inputnumber1" />
    <label for="inputnumber2">phone Number</label>
    <input type="text" id="inputnumber2" />
    
    <label for="inputnumber1">Email Address:</label>
    <input type="text" id="inputnumber1" />
    <label for="inputnumber2">Message</label>
    <input className='messageinput' type="text" id="inputnumber2" />
    <label htmlFor="label">
    <button className='btn'>Be in touch</button>
    </label>
</form>
</div>

    </div>
    </>
  )
}

export default Footer
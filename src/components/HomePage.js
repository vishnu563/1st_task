import React from 'react'

function HomePage() {
    
  return (
  <><div className='container'>
        <div className='item'>
            
        <div className='leftside_container'>
            <h1>Mass-Mail Dispatcher</h1>
                <div className='email'>
                    <div className='validemails'>
                    <p className='vm'>Valid Email(s)</p>
                    <p>vishnu@gmail.com</p>
                    <p>vishnu@gmail.com</p>
                    <p>vishnu@gmail.com</p>
                    <p>vishnu@gmail.com</p>
                    <p>vishnu@gmail.com</p>
                    <p>vishnu@gmail.com</p>
                    </div>
                    <div className='invalidemails'>
                    <p className='vm'>Invalid Email(s)</p>
                    <p>vishnu@gmail.co</p>
                    <p>vishnu@gmail.co</p>
                    <p>vishnu@gmail.co</p>
                    </div>
                </div>
                <button>Send</button>
        </div>
        <div className='rightside_container'>
            <form>
                <label htmlFor="email">From</label>
                <input className='inputs' type="email" id="email" name="email" placeholder="Enter email"></input>
                <label htmlFor="subject">Subject</label>
                <input className='inputs' type="text" id="subject" name="subject" placeholder="Enter subject"></input>
                <label htmlFor="body">Body</label>
                <textarea className='inputs' id="body" name="body" placeholder="Enter body Text"></textarea>
                <label>Upload .csv File</label>
                <input className='files' type="file"></input>
            </form>
        </div>
        </div>
  </div></>
  )
}

export default HomePage;
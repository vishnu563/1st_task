import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';


library.add(faEnvelope,faArrowUpFromBracket);

function HomePage() {
  return (
  <>
  <div className='header'>
    <h2 className='h2'>Mass Mail Dispatcher</h2>
  </div>
  <div className='container'>
        <div className='leftside_container'>
                    <div className='validemails'>
                        <p className='vm'>Valid Email(s)</p>
                        <div className='validscroll'>
                        <text>vishnuprasanth@gmail.com</text><br/>
                        </div>
                    </div>
                        <div className='sendcontainer'>
                            <div className='sendbtn'>
                            <button className='send'>
                                send
                            </button>
                            <div className='icon'>
                            <FontAwesomeIcon icon="fa-regular fa-envelope" />
                            </div>
                            </div>
                        </div>
        </div>  
        <div className='centercontainer'>
            <div>
                <p className='vm'>Invalid Mail(s)</p>
            </div>
            <div className='invalidmail'>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
                <text>vishnu@.cmmm</text><br/>
            </div>
        </div>
        <div className='rightside_container'>
            <div className='forms'>
                <label htmlFor="email">sender mail-id</label>
                <input className='inputs' type="email" id="email" name="email" placeholder="Enter email"></input>
                <label htmlFor="subject">Subject</label>
                <input className='inputs' type="text" id="subject" name="subject" placeholder="Enter subject"></input>
                <label htmlFor="body">content</label>
                <textarea className='inputs' id="body" name="body" placeholder="Enter body Text"></textarea>
                <label>Upload .csv File</label>
                <input className='files' type="file" accept=".csv" id='btn'></input>
                <div className='upcontainer'>
                    <div className='uploadbtn'>
                        <label htmlFor="btn" className='upload'>
                            upload
                        </label>
                    <div  className='uploadicon'>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default HomePage;
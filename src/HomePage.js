import React, { useState } from 'react';
import Papa from 'papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope,faArrowUpFromBracket);



function HomePage() {
    
    const [validEmails, setValidEmails] = useState([]);
    const [invalidEmails, setInvalidEmails] = useState([]);
    const [validCount, setValidCount] = useState(0);
    const [invalidCount, setInvalidCount] = useState(0);

    const isValidEmail = (email) => {
        let validEmailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmailPattern.test(email);
    }

    const handleFileUpload = (e) => {

        const file = e.target.files[0];

        Papa.parse(file,{
            header: true,
            complete: (results) =>{
                const valid = [];
                const invalid = [];

                results.data.forEach((row) => {
                    if (isValidEmail(row.Email)) {
                        valid.push(row.Email);
                    } else {
                        invalid.push(row.Email);
                    }
                });

                setValidEmails(valid);
                setInvalidEmails(invalid);
                setValidCount(valid.length);
                setInvalidCount(invalid.length);

            },
        });
    }

  return (
  <>
    <div className='header'>
        <h2 className='h2'>Mass Mail Dispatcher</h2>
    </div>
    <div className='container'>
        <div className='leftside_container'>
            <div className='validemails'>
                <p className='vm'>Valid Email(s) ({validCount})</p>
                <div className='validscroll'>
                    <div className='validMailText'>
                        {validEmails.length > 0 && (
                            <table>
                                <tbody>
                                    {validEmails.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item}</td>
                                        </tr>
                                        ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
            <label className='uploadlabel' >Upload .csv File</label>
            <input className='files' type="file" accept=".csv" onChange={handleFileUpload} id='btn'></input>
            <div className='upcontainer'>
                <div className='uploadbtn'>
                    <label htmlFor="btn" className='upload'>
                        upload
                    </label>
                    <div className='uploadicon'>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </div>
                </div>
            </div>            
        </div>  
        <div className='centercontainer'>
            <div>
                <p className='vm'>Invalid Mail(s) ({invalidCount})</p>
            </div>
            <div className='invalidmail'>
                <div className='inValidMailText'>
                    {invalidEmails.length > 0 && (
                        <table>
                            <tbody>
                                {invalidEmails.map((item, index) => (
                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
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
        </div>
    </div>
  </>
  )
}

export default HomePage;
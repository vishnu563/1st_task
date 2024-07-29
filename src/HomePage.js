import React, { useState } from 'react';
import Papa from 'papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope,faArrowUpFromBracket);



function HomePage() {
    
    const[data,setData]=useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        Papa.parse(file,{
            header: true,
            complete: (results) =>{
                setData(results.data);
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
                <p className='vm'>Valid Email(s)</p>
                    <div className='validscroll'>
                        <text>
                            {data.length ? (
                            <table>
                                <tbody>
                                    {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.Email}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            ) : null}
                        </text>
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
                <p className='vm'>Invalid Mail(s)</p>
            </div>
            <div className='invalidmail'>
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope,faArrowUpFromBracket);



function HomePage() {
    
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [content,setContent] = useState("");
    const [error, setError] = useState(null);

    const [validEmails, setValidEmails] = useState([]);
    const [invalidEmails, setInvalidEmails] = useState([]);
    const [validCount, setValidCount] = useState(0);
    const [invalidCount, setInvalidCount] = useState(0);

    useEffect(()=>{
       
    },[])
        
    const isValidEmail = (email) => {
        let validEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
        return validEmailPattern.test(email);
    }

    const handleFileUpload = (e) => {

        const file = e.target.files[0];
        if(file && file.type.startsWith("text/csv")){
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
                setInvalidCount(invalid.length-1);
            },
        });
    }
    else{
        alert("Please select a CSV file");
    }
    }


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubject = (e) => {
        setSubject(e.target.value);
    }

    const handleContent =(e)=>{
        setContent(e.target.value);
    }

    const sendEmail = () => {
        if (!email || !subject || !content) {
          setError("Please fill in all fields");
          return;
        }
    
        axios.post("http://localhost:5000/send-email", {
          validEmails,
          subject,
          content,
        })
          .then(() => {
            console.log("success");
          })
          .catch((error) => {
            console.log("failure", error);
            setError("Error sending email");
          });
      };
    
    
    return (<>
    <div className='header'>
        <h2 className='h2'>Mass Mail Dispatcher</h2>
    </div>
    <div className='container'>
        <div className='leftside_container'>
            <div className='validemails'>
                <p className='vm'>Valid Email(s) ({validCount})</p>
                <div className='validscroll'>
                    <div className='validMailText'>
                        {validEmails.length ? (
                            <table>
                                <tbody>
                                    {validEmails.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item}</td>
                                        </tr>
                                        ))}
                                </tbody>
                            </table>
                        ) : null}
                    </div>
                </div>
            </div>
            <label className='uploadlabel' >Upload .csv File</label>
            <input className='files' type="file" onChange={handleFileUpload} id='btn'></input>
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
                    {invalidEmails.length ? (
                        <table>
                            <tbody>
                                {invalidEmails.map((item, index) => (
                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    ):null}
                </div>
            </div>
        </div>
        <div className='rightside_container'>
            <div className='forms'>
                <label htmlFor="email">sender mail-id</label>
                    <input className='inputs' type="email" id="email" name="email" placeholder="Enter email" onChange={handleEmail} required></input>
                <label htmlFor="subject">Subject</label>
                    <input className='inputs' type="text" id="subject" name="subject" placeholder="Enter subject" onChange={handleSubject} required></input>
                <label htmlFor="body">content</label>
                    <textarea className='inputs' id="body" name="body" placeholder="Enter Content" onChange={handleContent} required></textarea>
                <div className='sendcontainer'>
                    <div className='sendbtn'>
                        <button className='send' onClick={sendEmail}>
                            send
                        </button>
                        <div className='icon'>
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                        </div>
                    </div>
                    {error && <p style={{ color: "green" }}>{error}</p>}
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default HomePage;
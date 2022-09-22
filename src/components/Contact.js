import Navbar from './Navbar';

import React from 'react'
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
   <Navbar/>
   
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Contact Details </h3>
          <div className="form-group mt-3">
          <label><b>Name:</b></label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  <label>Abhishek</label><br/>
          <label><b>Designation:</b></label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <label>AE IT</label><br>
          </br>
          <label><b>Adress:</b></label> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <label>RAPDRP SHAKTI BHAWAN</label><br>
          </br>
            <label><b>Email address:</b></label> &nbsp; &nbsp; &nbsp; &nbsp; <label>abhishekkaushik025@gmail.com</label><br/>
            <label><b>Mobile Number:</b></label> &nbsp; &nbsp; &nbsp; <label>9767564523</label>
          </div>
          
        </div>
      </form>
    </div>
  
    </>
  )
}

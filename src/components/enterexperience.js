import React,{useState} from 'react'
import axios from "axios";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const bcrypt = require('bcryptjs');

const csl = {backgroundColor: 'white',
color: 'black',
borderRadius: '5px',
border: '2px solid #5a5a5a',
padding: '3px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const csr = {backgroundColor: '#00a800',
color: 'white',
borderRadius: '7px',
border: '2px solid #5a5a5a',
padding: '3px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const ckd = {textAlign: "center",
padding: '3px 2px'};
const ckh = {textAlign: "center", color:'#b30000', border: '0px solid #5a5a5a',
padding: '3px 2px',};

export default function () {
  //  using useState
  
    const [ user, setUser] = useState({
        skill:"",

    })

    // handling on change
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
          
      }
      
      // register function to post data 
      const register = async () => {
        
        const { skill } = user
        //const password1 = await bcrypt.hash(user.password,12);
        //console.log(user)
        if(skill) {
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/skill/",
                params: { skill},
              }).then( res => {
                alert(res.data.message)

            })
          
        } else {
            alert("saved")
        }
       
   
  }
  return (
    <>
    <Navbar/>
    <br>
    </br>

    <div className="Auth-form-container">
    <form className="Auth-form">
    <div style={ckd}>
    <h3 style={ckh}>Enter your new Experience</h3>
    <input type="text" name="Experiece" value={user.name} style ={csl} placeholder="Enter your Experience 1 " onChange={ handleChange }  ></input> <br /><br />
    <input type="text" name="Experiece1" value={user.name} style ={csl} placeholder="Enter your Experience 2 " onChange={ handleChange }  ></input> <br /><br />
    
    <div className="buttons"><br />
    <button className="button" onClick={register} style ={csr} >Add</button>
    </div>
    <br />      
    
    </div></form></div>
    <br>
    </br>
    </>
  )
    
  }


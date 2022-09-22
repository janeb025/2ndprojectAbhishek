import Navbar from './Navbar';

import React from 'react'

import Card from 'react-bootstrap/Card';
import myimage from './myimage.jpg';
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
    <Navbar/>
   
    <br />
    <div className='about1'>
<Card style={{ width: '50rem', color:'blue'   }}>

      <Card.Body>
        <Card.Title><b>Recommended by:</b>&nbsp;&nbsp;&nbsp;UPPCL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Designation:</b>&nbsp;&nbsp;&nbsp;MD </Card.Subtitle>
        <Card.Text style={{ width: '50rem', color:'black'   }}>
          <b>Comment:</b>&nbsp;&nbsp;Abhishek is a very talented and punctual person. He knows PHP very well.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    <div className='about1'>
<Card style={{ width: '50rem', color:'blue'   }}>

      <Card.Body>
        <Card.Title><b>Recommended by:</b>&nbsp;&nbsp;&nbsp;UPPCL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Designation:</b>&nbsp;&nbsp;&nbsp;Chairman</Card.Subtitle>
        <Card.Text style={{ width: '50rem', color:'black'   }}>
          <b>Comment:</b>&nbsp;&nbsp;Abhishek is a very talented and punctual person. He knows PHP very well.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
   
    

  
    </>
  )
}
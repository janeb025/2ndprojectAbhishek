import Navbar from './Navbar';

import React from 'react'
//import Login from "./components/Login";
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
   <Navbar />
    <br />
    
<div className='rowC'>
<div className='about1'>
<Card style={{ width: '18rem', color:'green'   }}>

      <Card.Body>
        <Card.Title>UPPCL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2019-2022</Card.Subtitle>
        <Card.Text>
          Working as PHP Developer in UPPCL.
        </Card.Text>
        <Card.Link href="#">Click Here for more details</Card.Link>
      </Card.Body>
    </Card></div>
<div className='image1'>
<Card style={{ width: '18rem' ,color:'red' }}>
      <Card.Body>
        <Card.Title> UPPCL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2021-2022</Card.Subtitle>
        <Card.Text>
          Working as Team Lead of Library Project
        </Card.Text>
        <Card.Link href="#">Click Here for more details</Card.Link>
      </Card.Body>
    </Card>
    </div>
</div>




   


    </>
  )
}
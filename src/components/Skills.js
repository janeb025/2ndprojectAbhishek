
import Navbar from './Navbar';

import React from 'react'
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
   <Navbar />
    <br /> <br /> <br />
    <div className='rowC'>
    <div className='col-md-4' ></div>
<div className='col-md-4' >
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Skills</th>
              <th scope="col">Experience</th>
              
            </tr>
          </thead>
          <tbody>
           
              <tr>
                <td>1.</td><td>Programing</td><td>5 Years</td></tr>
               <tr><td>2.</td><td>Playing</td><td>15 Years</td></tr>
   <tr> <td>3.</td><td>Regarding</td><td>15 Years</td>
                
              </tr>
       
          </tbody>
        </table>
</div>
</div>
    </>
  )
}

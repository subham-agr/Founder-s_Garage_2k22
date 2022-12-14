import React, { useState } from 'react'
import './Registration.css'
import EnB_logo from './EnB_logo1.png'
import ITC_logo from './ITClogoWhite.png'


export default function Registration() {

  const [isDisabled, setDisabled] = useState(true);

  const Next = () => {
    setDisabled(false);
    let container=document.getElementById("team-div");
    console.log(container)
    container.style.display = "contents";
  }

  const Submit = () => {
    setDisabled(true);
    let container=document.getElementById("team-div");
    console.log(container)
    container.style.display = "none";
  }

  return (
      <div className="containers">
        <div className="container-form">
            <div className='header'>
              <div className="col-md-3"><img src={EnB_logo} className="image" alt="check your internet" /></div>
              <div className="col-md-6"><h2>Founder's Garage Registration</h2></div>
              <div className="col-md-3 ITClogo"><img src={ITC_logo} className="images" alt="check your internet" /></div>
            </div>
            <form action='https://script.google.com/macros/s/AKfycbzfasDxP60vobW6_HWahCrfZbW_Qns-ayHliac3JCPKuWYQzUyjr6YdkXvW4Uvik_HY/exec' className="row g-3">
                <div className="col-md-6">
                  <label for="inputemail4" className="form-label">Email ID*</label>
                  <input type="email" className="form-control" id="inputemail4" name='Email ID' required/>
                </div>
                <div className="col-md-6">
                  <label for="inputtext4" className="form-label">Name*</label>
                  <input type="text" className="form-control" id="inputtext4" name='Name' required/>
                </div>
                <div className="col-md-6">
                  <label for="inputNumber4" className="form-label">Whatsapp Number*</label>
                  <input type="number" className="form-control" id="inputNumber4" name='Whatsapp No.' required/>
                </div>
                <div className="col-md-6">
                  <label for="inputNumber4" className="form-label">Roll Number*</label>
                  <input type="number" className="form-control" id="inputNumber4" name='Roll Number' required/>
                </div>
                <div className="col-md-4">
                  <label>Do you have any idea? (Not a pre-requisite, we  will also be having brain-storming sessions)*</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="Any Idea" value="Yes" id="flexRadioDefault1" required/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="Any Idea" value="No" id="flexRadioDefault2" required/>
                    <label className="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
                <div className="col-md-8">
                  <label for="exampleFormControlTextarea1" className="form-label">If yes, please give a brief description</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='Description'></textarea>
                </div>
                <div className="col-md-12">
                  <label>Do you have a team? (No issues if not, as you progress in the event we will have a team mixing session)*</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" onClick={Next} name="Team" value="Yes" id="flexRadioDefault1" required/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" onClick={Submit} name="Team" value="No" id="flexRadioDefault2" required/>
                    <label className="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
                <div className="col-md-12" id='team-div'>
                  <div className="col-md-12 heading">
                    <h2 className='team-details'>Team Details</h2>
                  </div>
                  <div className="col-md-12 p-2">
                    <label for="inputtext4" className="form-label team-details">Team Name*</label>
                    <input type="text" className="form-control team-details" id="inputtext4" name='Team Name' disabled={isDisabled} required/>
                  </div>
                  <div className="col-md-6 p-2">
                    <label for="inputtext4" className="form-label team-details">Member 2*</label>
                    <input type="text" className="form-control team-details" id="inputtext4" name='Member-2' disabled={isDisabled} required/>
                  </div>
                  <div className="col-md-6 p-2">
                    <label for="inputEmail4" className="form-label team-details">Member 2 Ldap*</label>
                    <input type="email" className="form-control team-details" id="inputEmail4" name='Member-2 Ldap' disabled={isDisabled} required/>
                  </div>
                  <div className="col-md-6 p-2">
                    <label for="inputtext4" className="form-label team-details">Member 3*</label>
                    <input type="text" className="form-control team-details" id="inputtext4" name='Member-3' disabled={isDisabled} required/>
                  </div>
                  <div className="col-md-6 p-2">
                    <label for="inputEmail4" className="form-label team-details">Member 3 Ldap*</label>
                    <input type="email" className="form-control team-details" id="inputEmail4" name='Member-3 Ldap' disabled={isDisabled} required/>
                  </div>
                  <div className="col-md-6 p-2">
                    <label for="inputtext4" className="form-label team-details">Member 4*</label>
                    <input type="text" className="form-control team-details" id="inputtext4" name='Member-4' disabled={isDisabled} required/>
                  </div>
                  <div className="col-md-6 p-2">
                    <label for="inputEmail4" className="form-label team-details">Member 4 Ldap*</label>
                    <input type="email" className="form-control team-details" id="inputEmail4" name='Member-4 Ldap' disabled={isDisabled} required/>
                  </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4 submit">
                  <button type="submit" id='submit' className="btn btn-light my-3 col-md-12">Submit</button>
                </div>
                <div className="col-md-4"></div>
            </form>
        </div>
      </div>
  )
}

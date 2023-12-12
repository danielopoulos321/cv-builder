/* eslint-disable react/prop-types */
import '/src/styles/BasicInfo.css'
import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiContentSave } from '@mdi/js';
import { mdiPencilBoxOutline } from '@mdi/js';
import { useState } from 'react'

export default function BasicInfo({setGlobalInfo}) {
  const [basicInfo, setBasicInfo] = useState({
    fullName: '',
    phone: '',
    email: ''
}) 

  const handleChange = (e) => {
    //Name:Value pair from target
    //Pass in shallow copy of previous state along with value to update
    const {name, value} = e.target;
    setBasicInfo((prevInfo) => ({...prevInfo, [name]: value}))
  }

  const handleSave = (e) => {
    e.preventDefault();
    setGlobalInfo(basicInfo);
    const buttons = document.querySelectorAll('.save-edit button');
    buttons.forEach((button) => {
      button.classList.toggle('hidden');
    })
    const inputs = document.querySelectorAll('#basicInfoForm .inputContainer');
    inputs.forEach((input) => {
      const inputField = input.querySelector('input');
      if (inputField) {
        inputField.disabled = true;
    }});
    
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const buttons = document.querySelectorAll('.save-edit button');
    buttons.forEach((button) => {
      button.classList.toggle('hidden');
    })
    const inputs = document.querySelectorAll('#basicInfoForm .inputContainer');
    inputs.forEach((input) => {
      const inputField = input.querySelector('input');
      if (inputField) {
        inputField.disabled = false;
    }});
  }

  const toggleCollapse = () => {
    const basicInfoForm = document.getElementById('basicInfoForm');
    const chevron = document.querySelector('.infoHeader svg')
    if (basicInfoForm.classList.contains('collapse')){
      basicInfoForm.classList.remove('collapse');
      chevron.classList.remove('down');
      chevron.classList.add('up');
    } else {
      basicInfoForm.classList.add('collapse');
      chevron.classList.remove('up');
      chevron.classList.add('down');
      
    }
  }

  return (
    <div className='infoContainer'>
      <div className="infoHeader" onClick={toggleCollapse}>
        <h1>Personal Information</h1>
        <Icon className='down' path={mdiChevronUp} size={1} />
      </div>
      <form action="submit" className='collapse' id='basicInfoForm'>
        <div className="inputContainer">
          <label htmlFor="fullName">Full Name</label>
          <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          id="fullName"
          value={basicInfo.fullName}
          onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="phone">Phone Number</label>
          <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          id="phone"
          value={basicInfo.phone}
          onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">E-Mail Address</label>
          <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          value={basicInfo.email}
          onChange={handleChange}
          />
        </div>
        <div className="save-edit">
          <button onClick={handleSave} >
            <div>
              <Icon path={mdiContentSave} size={1} />
               <span>Save</span>
            </div>
          </button>
          <button className='hidden' onClick={handleEdit}>
            <div>
              <Icon path={mdiPencilBoxOutline} size={1} />
               <span>Edit</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

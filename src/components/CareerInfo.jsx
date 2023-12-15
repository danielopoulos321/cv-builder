/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import '/src/styles/CareerInfo.css'
import Icon from '@mdi/react';
import {v4 as uuidv4 } from 'uuid';
import { mdiChevronUp } from '@mdi/js';
import { mdiContentSave } from '@mdi/js';
import CareerInfoDisplay from './CareerInfoDisplay';

export default function CareerInfo({setGlobalInfo}) {
    const [careerInfo, setCareerInfo] = useState([]);
    const [formValues, setFormValues] = useState({
      employer: '',
      title: '',
      startDate: '',
      endDate: '',
    });
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);

    function isFormValid() {
      return formValues.employer.trim() !== '' && formValues.title.trim() !== '' && formValues.startDate.trim() !== '';
    }

    useEffect(() => {
      setSaveButtonDisabled(!isFormValid());
    }, [formValues]);

    const handleChange = (e) => {
        //Name:Value pair from target
        //Pass in shallow copy of previous state along with value to update
        const {name, value} = e.target;
        setFormValues((prevInfo) => ({...prevInfo, [name]: value}))
        setSaveButtonDisabled(!isFormValid());
      }
    
    const handleSave = (e) => {
        e.preventDefault();
      
        const newEntry = {
          id: selectedEntry || uuidv4(),
          ...formValues,
        };
        if (selectedEntry) {
          setCareerInfo((prevInfo) => {
            const updatedInfo = prevInfo.map((entry) => {
              return entry.id === selectedEntry ? { ...entry, ...newEntry } : entry;
            });
            return updatedInfo;
          });
          setSelectedEntry(null);
        } else {
          setCareerInfo((prevInfo) => [...prevInfo, newEntry]);
        }
      
        setFormValues({
          employer: '',
          title: '',
          startDate: '',
          endDate: '',
        });

        setSaveButtonDisabled(true);

        setGlobalInfo((prevGlobalInfo) => ({
          ...prevGlobalInfo,
          careerInfo: selectedEntry
            ? prevGlobalInfo.careerInfo.map((entry) => 
            entry.id === selectedEntry ? {...entry, ...newEntry} : entry
            )
            : [...prevGlobalInfo.careerInfo, newEntry],
        }))
      };
      

    const handleEdit = (entry) => {
        setSelectedEntry(entry.id);

        setFormValues({
          employer: entry.employer,
          title: entry.title,
          startDate: entry.startDate,
          endDate: entry.endDate,
        })
      }
    
    
    const toggleCollapse = () => {
        const careerInfoForm = document.getElementById('careerInfoForm');
        const chevron = document.querySelector('.careerHeader svg')
        if (careerInfoForm.classList.contains('collapse')){
          careerInfoForm.classList.remove('collapse');
          chevron.classList.remove('down');
          chevron.classList.add('up');
        } else {
          careerInfoForm.classList.add('collapse');
          chevron.classList.remove('up');
          chevron.classList.add('down');
          
        }
      }

    return (
        <div className='infoContainer'>
          <div className="careerHeader" onClick={toggleCollapse}>
            <h1>Work Experience</h1>
            <Icon className='down' path={mdiChevronUp} size={1} />
          </div>
          <form className='collapse' id='careerInfoForm'>
            <div className="inputContainer">
              <label htmlFor="employer">Employer Name</label>
              <input
              type="text"
              name="employer"
              placeholder="Enter Employer"
              id="employer"
              value={formValues.employer}
              onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="title">Job Title</label>
              <input
              type="text"
              name="title"
              placeholder="Enter Job Title"
              id="title"
              value={formValues.title}
              onChange={handleChange}
              />
            </div>
            <div className="dates">
                <div className="inputContainer">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={formValues.startDate}
                  onChange={handleChange}
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="endDate">End Date</label>
                  <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={formValues.endDate}
                  onChange={handleChange}
                  />
                </div>
            </div>
            <div className="save-edit">
              <button onClick={handleSave} disabled={isSaveButtonDisabled} >
                <div>
                  <Icon path={mdiContentSave} size={1} />
                   <span>Save</span>
                </div>
              </button>
            </div>
          </form>
          <ul className="job-entries">
           { careerInfo.map((entry) => (
            <CareerInfoDisplay 
              key={entry.id} 
              careerInfo={entry}
              onEdit={handleEdit}/>
           ))}
          </ul>
        </div>
      );
}
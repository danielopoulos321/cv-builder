/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import '/src/styles/EducationInfo.css'
import Icon from '@mdi/react';
import {v4 as uuidv4 } from 'uuid';
import { mdiChevronUp } from '@mdi/js';
import { mdiContentSave } from '@mdi/js';
import EduInfoDisplay from './EduInfoDisplay';

export default function EducationInfo({setGlobalInfo}) {
    const [educationInfo, setEducationInfo] = useState([]);
    const [formValues, setFormValues] = useState({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);

    function isFormValid() {
      return formValues.schoolName.trim() !== '' && formValues.degree.trim() !== '' && formValues.startDate.trim() !== '';
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
          setEducationInfo((prevInfo) => {
            const updatedInfo = prevInfo.map((entry) => {
              return entry.id === selectedEntry ? { ...entry, ...newEntry } : entry;
            });
            return updatedInfo;
          });
          setSelectedEntry(null);
        } else {
          setEducationInfo((prevInfo) => [...prevInfo, newEntry]);
        }
      
        setFormValues({
          schoolName: '',
          degree: '',
          startDate: '',
          endDate: '',
        });

        setSaveButtonDisabled(true);

        setGlobalInfo((prevGlobalInfo) => ({
          ...prevGlobalInfo,
          educationInfo: selectedEntry
            ? prevGlobalInfo.educationInfo.map((entry) => 
            entry.id === selectedEntry ? {...entry, ...newEntry} : entry
            )
            : [...prevGlobalInfo.educationInfo, newEntry],
        }))
      };
      

    const handleEdit = (entry) => {
        setSelectedEntry(entry.id);

        setFormValues({
          schoolName: entry.schoolName,
          degree: entry.degree,
          startDate: entry.startDate,
          endDate: entry.endDate,
        })
      }
    
    
    const toggleCollapse = () => {
        const educationInfoForm = document.getElementById('educationInfoForm');
        const chevron = document.querySelector('.eduHeader svg')
        if (educationInfoForm.classList.contains('collapse')){
          educationInfoForm.classList.remove('collapse');
          chevron.classList.remove('down');
          chevron.classList.add('up');
        } else {
          educationInfoForm.classList.add('collapse');
          chevron.classList.remove('up');
          chevron.classList.add('down');
          
        }
      }

    return (
        <div className='infoContainer'>
          <div className="eduHeader" onClick={toggleCollapse}>
            <h1>Education Information</h1>
            <Icon className='down' path={mdiChevronUp} size={1} />
          </div>
          <form className='collapse' id='educationInfoForm'>
            <div className="inputContainer">
              <label htmlFor="schoolName">School Name</label>
              <input
              type="text"
              name="schoolName"
              placeholder="Enter School"
              id="schoolName"
              value={formValues.schoolName}
              onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="degree">Degree</label>
              <input
              type="text"
              name="degree"
              placeholder="Enter Degree"
              id="degree"
              value={formValues.degree}
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
          <ul className="edu-entries">
           { educationInfo.map((entry) => (
            <EduInfoDisplay 
              key={entry.id} 
              educationInfo={entry}
              onEdit={handleEdit}/>
           ))}
          </ul>
        </div>
      );
}
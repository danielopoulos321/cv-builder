import './styles/App.css'
import { useState } from 'react'
import BasicInfo from './components/BasicInfo'
import EducationInfo from './components/EducationInfo'
import CareerInfo from './components/CareerInfo'
import CVPreview from './components/CVPreview'

function App() {
    const [globalInfo, setGlobalInfo] = useState({
        basicInfo: {
          fullName: 'Your Name',
          phone: '555-555-555',
          email: 'email@email.com',
        },
        educationInfo: [],
        careerInfo: [],
    })
    return (

        <>
            <div className="allInputsContainer">
                <BasicInfo globalInfo={globalInfo} setGlobalInfo={setGlobalInfo}/>
                <EducationInfo globalInfo={globalInfo} setGlobalInfo={setGlobalInfo}/>
                <CareerInfo globalInfo={globalInfo} setGlobalInfo={setGlobalInfo} />
            </div>
            <CVPreview globalInfo={globalInfo}/>
        </>
    )}

export default App

  //All states live in APP, components inherit them as props
  //On form submit, commits them to the preview
        //collapses form and shows edit button
        //form save state set to saved which commits input info into the cv preview

//FLEX CONTAINER SEPARATED BY FORMS AND PREVIEW
//COMPONENT THAT BUILDS SIMILAR INPUT BOXES?
//COMPONENT FOR EDIT + SAVE BUTTONS

  //GENERAL INFORMATION FORM
    //Name
    //Phone Number
    //e-mail

  //EDUCATION FORM
  //Adds each entry individually, each with an edit button
  //Each edit button opens a new EDUFORM with the info
  //New Button opens a fresh EDUFORM
    //School Name
    //Title of Study
    //Date of Study


  //EXPERIENCE FORM
    //Company Name
    //Position Title
    //Responsibilites
    //Date of Work


  //CV PREVIEW
  

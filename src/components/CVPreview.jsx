/* eslint-disable react/prop-types */
import '/src/styles/CVPreview.css'
export default function CVPreview({globalInfo}) {
    return(
        <div className="cvOutline">
            <div className="cvHeader">
                <h1>{globalInfo.basicInfo.fullName}</h1>
                <div className="contact">
                    <h2>{globalInfo.basicInfo.phone}</h2>
                    <h2>{globalInfo.basicInfo.email}</h2>
                </div>
            </div>
            <div className="education">
                <h1 className='subheading'>Education</h1>
                <ul>
                    {globalInfo.educationInfo.map((education) => (
                        <li key={education.id} className='listEntry'>
                            <div className='start-end'>
                                <p>Start Date: {education.startDate}</p>
                                <p>End Date: {education.endDate}</p>
                            </div>
                            <div className="details">
                                <p><b>{education.schoolName}</b></p>
                                <p>{education.degree}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="career">
                <h1 className='subheading'>Professional Experience</h1>
                <ul>
                    {globalInfo.careerInfo.map((job) => (
                        <li key={job.id} className='listEntry'>
                            <div className='start-end'>
                                <p>Start Date: {job.startDate}</p>
                                <p>End Date: {job.endDate}</p>
                            </div>
                            <div className="details">
                                <p><b>{job.employer}</b></p>
                                <p>{job.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
/* eslint-disable react/prop-types */
import Icon from '@mdi/react';
import { mdiPencilBoxOutline } from '@mdi/js';
export default function EduInfoDisplay({educationInfo, onEdit}) {
    return (
      <li className='edu-element'>
        <div className="edu-info">
          <h2>{educationInfo.schoolName}</h2>
          <p>{educationInfo.degree}</p>
          <p>{educationInfo.startDate} - {educationInfo.endDate}</p>
        </div>
        <button className='edit-button' onClick={() => onEdit(educationInfo)}>
          <div>
            <Icon path={mdiPencilBoxOutline} size={1} />
            <span>Edit</span>
          </div>
        </button>
      </li>
    )
  }
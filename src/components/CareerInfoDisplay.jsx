/* eslint-disable react/prop-types */
import Icon from '@mdi/react';
import { mdiPencilBoxOutline } from '@mdi/js';
export default function CareerInfoDisplay({careerInfo, onEdit}) {
    return (
      <li className='job-element'>
        <div className="job-info">
          <h2>{careerInfo.employer}</h2>
          <p>{careerInfo.title}</p>
          <p>{careerInfo.startDate} - {careerInfo.endDate}</p>
        </div>
        <button className='edit-button' onClick={() => onEdit(careerInfo)}>
          <div>
            <Icon path={mdiPencilBoxOutline} size={1} />
            <span>Edit</span>
          </div>
        </button>
      </li>
    )
  }
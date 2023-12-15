/* eslint-disable react/prop-types */
import '/src/styles/CVPreview.css'
export default function CVPreview({globalInfo}) {
    return(
        <div className="cvOutline">
            <h1>{globalInfo.basicInfo.fullName}</h1>
            <h2>{globalInfo.basicInfo.phone}</h2>
            <h2>{globalInfo.basicInfo.email}</h2>
        </div>
    )
}
/* eslint-disable react/prop-types */
import '/src/styles/CVPreview.css'
export default function CVPreview({globalInfo}) {
    return(
        <div className="cvOutline">
            <h1>{globalInfo.fullName}</h1>
            <h2>{globalInfo.phone}</h2>
            <h2>{globalInfo.email}</h2>
        </div>
    )
}
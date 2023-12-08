/* eslint-disable react/prop-types */
import '/src/styles/BasicInfo.css'
export default function BasicInfo({basicInfo, setBasicInfo}) {

  const handleChange = (e) => {
    //Name:Value pair from target
    //Pass in shallow copy of previous state along with value to update
    const {name, value} = e.target;
    setBasicInfo((prevInfo) => ({...prevInfo, [name]: value}))
  }

  return (
    <div className='infoContainer'>
      <h1>Personal Information</h1>
      <form action="submit">
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
      </form>
    </div>
  );
}

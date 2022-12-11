import React, { useState } from 'react'
import '../../index.css'
import Datetime from 'react-datetime';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/slices/employeeSlice';

import Modal from 'wealth-health-react-modal';
import styles from 'wealth-health-react-modal/dist/index.css'
import FormEmployee from '../../components/FormEmployee/FormEmployee';

export default function Home() {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [birthDate, setBirthDate] = useState(null)

    const [street, setStreet] = useState(null)
    const [city, setCity] = useState(null)
    const [stateName, setStateName] = useState("AL")
    const [zip, setZip] = useState(null)
    const [departement, setDepartement] = useState("Sales")

    const [isOpen, setIsOpen] = useState(false)

    const reformateDateFromMoment = (moment) => {
        let dateObject = moment.toDate()
        console.log(`${dateObject.getDate()}/${dateObject.getMonth()+1}/${dateObject.getFullYear()}`)
        return `${dateObject.getDate()}/${dateObject.getMonth()+1}/${dateObject.getFullYear()}`
    }

    const startDateUpdate = (moment) => {
        setStartDate(reformateDateFromMoment(moment))
    }

    const birthDateUpdate = (moment) => {
        setBirthDate(reformateDateFromMoment(moment))
    }

    const saveEmployee = () => {
        setIsOpen(true)
        dispatch(
            addEmployee({
                firstName: firstName,
                lastName: lastName,
                startDate: startDate,
                department: departement,
                birthDate: birthDate,
                street: street,
                city: city,
                state: stateName,
                zip: zip,
            })
        )
    }
    //console.log(departement)

    return (
    <div>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to='/employees_list'>View Current Employees</Link>
            <h2>Create Employee</h2>
            {/* <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onChange={(event)=>setFirstName(event.target.value)}/>

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={(event)=>setLastName(event.target.value)}/>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <Datetime timeFormat={false} onChange={(birthDateUpdate)}/>

                <label htmlFor="start-date">Start Date</label>
                <Datetime timeFormat={false} onChange={(startDateUpdate)}/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onChange={(event)=>setStreet(event.target.value)}/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onChange={(event)=>setCity(event.target.value)}/>

                    <label htmlFor="state">State</label>
                    <select onChange={(event)=>setStateName(event.target.value)}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={(event)=>setZip(event.target.value)}/>
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" onChange={(event)=>setDepartement(event.target.value)}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form> */}
            <FormEmployee/>

            <button onClick={saveEmployee}>Save</button>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} title={"Form sended"} content={"The employee has been created"}/>}
        
    </div>
  )
}

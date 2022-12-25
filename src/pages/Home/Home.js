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
            
            <FormEmployee setIsOpen={setIsOpen}/>

            {/* <button onClick={saveEmployee}>Save</button> */}
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} title={"Form sended"} content={"The employee has been created"}/>}
        
    </div>
  )
}

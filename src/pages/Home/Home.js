import React, { useState } from 'react'
import '../../index.css'
import Datetime from 'react-datetime';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/slices/employeeSlice';

import Modal from 'wealth-health-react-modal';
import styles from 'wealth-health-react-modal/dist/index.css'
import FormEmployee from '../../components/FormEmployee/FormEmployee';
import { StyledLink, TitleLink } from '../../utils/styles/atoms'
export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    console.log(isFormValid)
    return (
    <div>
        <div className="title">
            <TitleLink>
                <h1>HRnet</h1>
            </TitleLink>
            
        </div>
        <div className="container">
            <StyledLink to='/employees_list'>View Current Employees</StyledLink>
            
            <FormEmployee setIsOpen={setIsOpen} setIsFormValid={setIsFormValid}/>

            {/* <button onClick={saveEmployee}>Save</button> */}
        </div>
        {
            isFormValid == true ?
        isOpen && <Modal setIsOpen={setIsOpen} title={"Form sended"} content={"The employee has been created"}/>
        :
        isOpen && <Modal setIsOpen={setIsOpen} title={"Form data invalid"} content={"The employee has not been created"}/>
        }
        
    </div>
  )
}

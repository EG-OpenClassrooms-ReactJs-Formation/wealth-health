import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLink, TitleLink } from '../../utils/styles/atoms'
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'

export default function EmployeeList() {
  return (
    <div className="container-employee">
      
      <div className="title">
        <TitleLink to="/">
          <h1>Employee</h1>
        </TitleLink>
        
      </div>
      <StyledLink to="/">Home</StyledLink>
      <EmployeesTable/>
      
    </div>
    
  )
}

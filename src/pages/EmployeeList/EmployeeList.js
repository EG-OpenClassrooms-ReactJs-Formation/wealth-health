import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'

export default function EmployeeList() {
  return (
    <div>
      <EmployeesTable/>
      <Link to="/">Home</Link>
    </div>
    
  )
}

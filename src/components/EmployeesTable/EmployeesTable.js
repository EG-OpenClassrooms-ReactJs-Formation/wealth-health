import React from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux';

// const data = [
//   {
// 		id: 1,
// 		firstName: 'Frozen yogurt',
// 		lastName: 'Ice cream',
// 		startDate: 159,
// 		department: 6.0,
// 		birthDate: 24,
// 		street: 4.0,
// 		city: 87,
// 		state: 14,
// 		zip: 1,
// 	},
// 	{
// 		id: 2,
// 		firstName: 'Frozen yogurt',
// 		lastName: 'Ice cream',
// 		startDate: 159,
// 		department: 6.0,
// 		birthDate: 24,
// 		street: 4.0,
// 		city: 87,
// 		state: 14,
// 		zip: 1,
// 	},
// ]
const columns = [
	{
		name: 'First Name',
		selector: row => row.firstName,
		sortable: true,
  		grow: 2,
  		reorder: true,
  	},
  	{
  		name: 'Last Name',
  		selector: row => row.lastName,
  		sortable: true,
  		reorder: true,
  	},
  	{
  		name: 'Start Date',
  		selector: row => row.startDate,
  		sortable: true,
  		right: true,
  		reorder: true,
  	},
  	{
  		name: 'Department',
  		selector: row => row.department,
  		sortable: true,
  		right: true,
  		reorder: true,
  	},
  	{
  		name: 'Date of Birth',
  		selector: row => row.birthDate,
  		sortable: true,
  		right: true,
  		reorder: true,
  	},
  	{
  		name: 'Street',
  		selector: row => row.street,
  		sortable: true,
  		right: true,
  		reorder: true,
  	},
  	{
  		name: 'City',
  		selector: row => row.city,
  		sortable: true,
  		right: true,
  		reorder: true,
  	},
  	{
  		name: 'State',
  		selector: row => row.state,
  		sortable: true,
  		right: true,
  		reorder: true,
  	},
  {
    name: 'Zip Code',
    selector: row => row.zip,
    sortable: true,
    right: true,
    reorder: true,
	},
];

export default function EmployeesTable() {
    const employeesList = useSelector((state) => state.employee)
    return (
        <DataTable title="Employee" columns={columns} data={employeesList} onColumnOrderChange={cols => console.log(cols)} />
    )
}

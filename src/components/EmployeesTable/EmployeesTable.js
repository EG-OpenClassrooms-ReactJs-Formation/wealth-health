import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;
const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
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

	const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	// const filteredItems = employeesList.filter(
	// 	item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
	// );
	const filteredItems = employeesList.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
				item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
				//item.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
				item.department && item.department.toLowerCase().includes(filterText.toLowerCase()) ||
				//item.birthDate.toLowerCase().includes(filterText.toLowerCase()) ||
				item.street && item.street.toLowerCase().includes(filterText.toLowerCase()) ||
				item.city && item.city.toLowerCase().includes(filterText.toLowerCase()) ||
				item.state && item.state.toLowerCase().includes(filterText.toLowerCase()) ||
				item.zip && item.zip.toLowerCase().includes(filterText.toLowerCase()),
	);
	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
				if (filterText) {
					setResetPaginationToggle(!resetPaginationToggle);
					setFilterText('');
				}
			};

			return (
					<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
				);
			}, [filterText, resetPaginationToggle]);

    return (
        <DataTable 
			// title="Employee" 
			columns={columns} 
			data={filteredItems} 
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			onColumnOrderChange={cols => console.log(cols)}
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
			
		/>
    )
}

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
);
import { createSlice } from "@reduxjs/toolkit";

const createInitialState = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    console.log(employees)
    if (employees === null){
        localStorage.setItem('employees', JSON.stringify([]))
        return []
    }
    else {
        return employees
    }
}

export const employeeSlice = createSlice({
    name: "employee",
    initialState: createInitialState(),
    reducers: {
        addEmployee: (state, action) => {
            console.log(action.payload)
            let employeesList = JSON.parse(localStorage.getItem('employees'))
            let newEmployee = {
                id: state.length,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                startDate: action.payload.startDate,
                department: action.payload.department,
                birthDate: action.payload.birthDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip,
            }
            employeesList.push(newEmployee)
            localStorage.setItem('employees', JSON.stringify(employeesList))
            state.push(newEmployee)
        },
    }
})

export const {addEmployee} = employeeSlice.actions
export default employeeSlice.reducer
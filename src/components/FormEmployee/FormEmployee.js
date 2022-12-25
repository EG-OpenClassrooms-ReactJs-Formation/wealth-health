import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/slices/employeeSlice';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as Yup from 'yup';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Select,
    NativeSelect,
    InputLabel,
    MenuItem
  } from '@material-ui/core';
export default function FormEmployee({setIsOpen}) {
    // const validationSchema = Yup.object().shape({
    //     fullname: Yup.string().required('Fullname is required'),
    //     username: Yup.string()
    //       .required('Username is required')
    //       .min(6, 'Username must be at least 6 characters')
    //       .max(20, 'Username must not exceed 20 characters'),
    //     email: Yup.string()
    //       .required('Email is required')
    //       .email('Email is invalid'),
    //     password: Yup.string()
    //       .required('Password is required')
    //       .min(6, 'Password must be at least 6 characters')
    //       .max(40, 'Password must not exceed 40 characters'),
    //     confirmPassword: Yup.string()
    //       .required('Confirm Password is required')
    //       .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    //     acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    //   });
    // const {
    //     register,
    //     control,
    //     handleSubmit,
    //     formState: { errors }
    //     } = useForm({
    //     resolver: yupResolver(validationSchema)
    // });
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

    const reformateDateFromMoment = (moment) => {
        let dateObject = moment.toDate()
        console.log(`${dateObject.getDate()}/${dateObject.getMonth()+1}/${dateObject.getFullYear()}`)
        return `${dateObject.getDate()}/${dateObject.getMonth()+1}/${dateObject.getFullYear()}`
    }

    const startDateUpdate = (moment) => {
        const formatedDate = reformateDateFromMoment(moment)
        setStartDate(formatedDate)
        
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
  return (
    <Fragment>
        <Paper >
            <Box px={3} py={2}>
                <Typography variant="h4" align="center" margin="dense">
                    Create Employee
                </Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            inputProps={{
                                style: {
                                padding: 15
                                }
                            }}
                            
                            margin="dense"
                            onChange={(event)=>setFirstName(event.target.value)}
                            // error={errors.fullname ? true : false}
                        />
                        {/* <Typography variant="inherit" color="textSecondary">
                            {errors.fullname?.message}
                        </Typography> */}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        onChange={(event)=>setLastName(event.target.value)}
                        // error={errors.username ? true : false}
                    />
                    {/* <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography> */}
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                //label="Date desktop *"
                                label={
                                    <Typography sx={{ fontSize: 14, paddingTop:16 }} component="h3">Birth Date *</Typography>
                                }
                                inputProps={{
                                    style: {
                                    paddingTop: 25,
                                    
                                    }
                                }}
                                inputFormat="MM/DD/YYYY"
                                value={birthDate}
                                onChange={birthDateUpdate}
                                renderInput={(params) => <TextField {...params} />}
                                
                            />
                        </LocalizationProvider>
                        {/* <Typography variant="inherit" color="textSecondary">
                            {errors.email?.message}
                        </Typography> */}
                    
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                //label="Date desktop *"
                                label={
                                    <Typography sx={{ fontSize: 14, paddingTop:16 }} component="h3">Start Date *</Typography>
                                }
                                inputProps={{
                                    style: {
                                    paddingTop: 25,
                                    
                                    }
                                }}
                                inputFormat="MM/DD/YYYY"
                                value={startDate}
                                onChange={startDateUpdate}
                                renderInput={(params) => <TextField {...params} />}
                                
                            />
                        </LocalizationProvider>
                        {/* <Typography variant="inherit" color="textSecondary">
                            {errors.email?.message}
                        </Typography> */}
                    
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="Street"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        onChange={(event)=>setStreet(event.target.value)}
                        // error={errors.username ? true : false}
                    />
                    {/* <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography> */}
                </Grid>
                
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        onChange={(event)=>setCity(event.target.value)}
                        // error={errors.username ? true : false}
                    />
                    {/* <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography> */}
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        onChange={(event)=>setZip(event.target.value)}
                        // error={errors.username ? true : false}
                    />
                    {/* <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography> */}
                </Grid>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={stateName}
                    label="State"
                    onChange={(event)=>setStateName(event.target.value)}
                >
                    <MenuItem value={"AL"}>Alabama</MenuItem>
                    <MenuItem value={"AK"}>Alaska</MenuItem>
                    <MenuItem value={"AZ"}>Arizona</MenuItem>
                    <MenuItem value={"AR"}>Arkansas</MenuItem>
                    <MenuItem value={"CA"}>California</MenuItem>
                    <MenuItem value={"CO"}>Colorado</MenuItem>
                    <MenuItem value={"CT"}>Connecticut</MenuItem>
                    <MenuItem value={"DE"}>Delaware</MenuItem>
                    <MenuItem value={"DC"}>District Of Columbia</MenuItem>
                    <MenuItem value={"FL"}>Florida</MenuItem>
                    <MenuItem value={"GA"}>Georgia</MenuItem>
                    <MenuItem value={"HI"}>Hawaii</MenuItem>
                    <MenuItem value={"ID"}>Idaho</MenuItem>
                    <MenuItem value={"IL"}>Illinois</MenuItem>
                    <MenuItem value={"IN"}>Indiana</MenuItem>
                    <MenuItem value={"IA"}>Iowa</MenuItem>
                    <MenuItem value={"KS"}>Kansas</MenuItem>
                    <MenuItem value={"KY"}>Kentucky</MenuItem>
                    <MenuItem value={"LA"}>Louisiana</MenuItem>
                    <MenuItem value={"ME"}>Maine</MenuItem>
                    <MenuItem value={"MD"}>Maryland</MenuItem>
                    <MenuItem value={"MA"}>Massachusetts</MenuItem>
                    <MenuItem value={"MI"}>Michigan</MenuItem>
                    <MenuItem value={"MN"}>Minnesota</MenuItem>
                    <MenuItem value={"MS"}>Mississippi</MenuItem>
                    <MenuItem value={"MO"}>Missouri</MenuItem>
                    <MenuItem value={"MT"}>Montana</MenuItem>
                    <MenuItem value={"NE"}>Nebraska</MenuItem>
                    <MenuItem value={"NV"}>Nevada</MenuItem>
                    <MenuItem value={"NH"}>New Hampshire</MenuItem>
                    <MenuItem value={"NJ"}>New Jersey</MenuItem>
                    <MenuItem value={"NM"}>New Mexico</MenuItem>
                    <MenuItem value={"NY"}>New York</MenuItem>
                    <MenuItem value={"NC"}>North Carolina</MenuItem>
                    <MenuItem value={"ND"}>North Dakota</MenuItem>
                    <MenuItem value={"OH"}>Ohio</MenuItem>
                    <MenuItem value={"OK"}>Oklahoma</MenuItem>
                    <MenuItem value={"OR"}>Oregon</MenuItem>
                    <MenuItem value={"PA"}>Pennsylvania</MenuItem>
                    <MenuItem value={"RI"}>Rhode Island</MenuItem>
                    <MenuItem value={"SC"}>South Carolina</MenuItem>
                    <MenuItem value={"SD"}>South Dakota</MenuItem>
                    <MenuItem value={"TN"}>Tennessee</MenuItem>
                    <MenuItem value={"TX"}>Texas</MenuItem>
                    <MenuItem value={"UT"}>Utah</MenuItem>
                    <MenuItem value={"VT"}>Vermont</MenuItem>
                    <MenuItem value={"VA"}>Virginia</MenuItem>
                    <MenuItem value={"WA"}>Washington</MenuItem>
                    <MenuItem value={"WV"}>West Virginia</MenuItem>
                    <MenuItem value={"WI"}>Wisconsin</MenuItem>
                    <MenuItem value={"WY"}>Wyoming</MenuItem>
                </Select>
                
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="departement"
                        name="departement"
                        label="Departement"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        onChange={(event)=>setDepartement(event.target.value)}
                        // error={errors.username ? true : false}
                    />
                    {/* <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography> */}
                </Grid>
                <Box mt={3}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={saveEmployee}
                    >
                    Save
                    </Button>
                </Box>
            </Box>
        </Paper>
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
    InputLabel,
    MenuItem
  } from '@material-ui/core';
export default function FormEmployee() {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
          .required('Username is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
          .required('Confirm Password is required')
          .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
      });
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };
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
                            id="fullname"
                            name="fullname"
                            label="Full Name"
                            inputProps={{
                                style: {
                                padding: 15
                                }
                            }}
                            
                            margin="dense"
                            {...register('fullname')}
                            error={errors.fullname ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                            {errors.fullname?.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="username"
                        name="username"
                        label="Username"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        {...register('username')}
                        error={errors.username ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        {...register('email')}
                        error={errors.email ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.email?.message}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        
                        margin="dense"
                        {...register('password')}
                        error={errors.password ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.password?.message}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        
                        margin="dense"
                        inputProps={{
                            style: {
                            padding: 15
                            }
                        }}
                        {...register('confirmPassword')}
                        error={errors.confirmPassword ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.confirmPassword?.message}
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={
                        <Controller
                            control={control}
                            name="acceptTerms"
                            defaultValue="false"
                            inputRef={register()}
                            render={({ field: { onChange } }) => (
                            <Checkbox
                                color="primary"
                                onChange={e => onChange(e.target.checked)}
                            />
                            )}
                        />
                        }
                        label={
                        <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                            I have read and agree to the Terms *
                        </Typography>
                        }
                    />
                    <br />
                    <Typography variant="inherit" color="textSecondary">
                        {errors.acceptTerms
                        ? '(' + errors.acceptTerms.message + ')'
                        : ''}
                    </Typography>
                    </Grid>
                </Grid>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"age"}
                    label="Age"
                    // onChange={handleChange}
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
                <Box mt={3}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSubmit)}
                    >
                    Register
                    </Button>
                </Box>
            </Box>
        </Paper>
    </Fragment>
  )
}

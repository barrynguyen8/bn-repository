import React from 'react'
import Header from '../ui/Header'
import { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Login = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleInputChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value
    })

    const postUserData = (e) => {
        alert(`Thanks ${form.name}, you should receive a confirmation via email regarding your username and logging in details.`)
        console.log(form)

        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(form)
        })

    }

    return (
        <div>
            <Header />
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar>
                            <AddBoxIcon color="primary" />
                        </Avatar>
                        <h2>Register</h2>
                        <Typography variant='caption'>Please fill this form to sign up for a new account.</Typography>
                    </Grid>
                    <form>
                        <TextField name='name' value={form.name} onChange={handleInputChange} fullWidth label='Name' />
                        <TextField name='email' value={form.email} onChange={handleInputChange} fullWidth label='Email' />
                        <br></br>
                        <br></br>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <TextField name='phone' value={form.phone} onChange={handleInputChange} fullWidth label='Phone number' />
                        <TextField name='email' value={form.password} onChange={handleInputChange} fullWidth type="password" label='Password' />
                        <TextField name='phone' fullWidth type="password" label='Confirm Password' />
                        <br></br>
                        <br></br>
                        <FormControlLabel control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                            label="I accept terms and conditions."
                        />
                        <br></br>

                    </form>
                    <br></br>
                    <br></br>
                    <Button onClick={postUserData} type='submit' variant='contained' color='primary' fullWidth>Signup</Button>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login


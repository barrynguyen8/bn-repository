import React from 'react'
import Header from '../ui/Header'
import { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AssignmentInd';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const handleInputChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value
    })
    const postUserData = (e) => {
        alert(`Thanks, you are now logged in.`)
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
                            <AccountBoxIcon color="primary" />
                        </Avatar>
                        <h2>Login</h2>
                        <Typography variant='caption'>Please fill this form to sign in.</Typography>
                    </Grid>
                    <form>
                        <TextField name='username' value={form.name} onChange={handleInputChange} fullWidth label='Username *' placeholder="Enter username" />
                        <TextField name='password' value={form.password} onChange={handleInputChange} fullWidth label='Password *' type="password" placeholder="Enter password" />
                        <br></br>
                        <br></br>
                        <FormControlLabel control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                            label="Remember me"
                        />
                        <br></br>
                        <Typography >
                            <Link href="#" >
                                Forgotten your password?
                                </Link>
                        </Typography>
                        <Typography > Need to register an account?
                                    <br></br>
                            <Link href="#" >
                                Sign Up
                                </Link>
                        </Typography>

                    </form>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button onClick={postUserData} type='submit' variant='contained' color='primary' fullWidth>Login</Button>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login
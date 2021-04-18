import React from 'react'
import Header from '../ui/Header'
import { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'

const Contact = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        comments: ""
    })

    const handleInputChange = (e) => setForm({
        ...form,
        [e.target.name]: e.target.value
    })

    // let userDetails = []; 

    // const addUserDetails = (userData) => {
    //     addUserDetails.push(userData)
    //     console.log(addUserDetails)
    //}

    const postUserData = (e) => {
        alert(`Thanks ${form.name}, we will contact you within the next 24-48 hours!`)
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
                            <AssignmentIcon color="primary" />
                        </Avatar>
                        <h2>Contact Form</h2>
                        <Typography variant='caption'>Please fill this form to contact us and we will endeavour to respond to your inquiry within 24-48 hours.</Typography>
                    </Grid>
                    <form>
                        <TextField name='name' value={form.name} onChange={handleInputChange} fullWidth label='Name' />
                        <TextField name='email' value={form.email} onChange={handleInputChange} fullWidth label='Email' />
                        <TextField name='phone' value={form.phone} onChange={handleInputChange} fullWidth label='Phone number' />
                        <TextField name='comments' value={form.comments} onChange={handleInputChange} fullWidth label='Comments' multiline rows={6} />
                    </form>
                    <br></br>
                    <Button onClick={postUserData} type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                </Paper>
            </Grid>
        </div>
    )
}

export default Contact



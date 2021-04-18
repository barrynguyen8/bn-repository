import React from 'react'
import { Typography } from '@material-ui/core';
import logo from '../../assets/logo.png'

const Welcome = () =>
    <div style={{ display: "flex", alignItems: "center", padding: "30px" }}>
        <br></br>
        <img src={logo} alt="logo" height="150px" width="150px" /><br></br>
        <Typography style={{ marginLeft: 25 }} variant="h6"><br></br><i><strong>Image Finder</strong></i> was founded in Melbourne, Australia in 2021 by aspiring software engineer, Barry Nguyen. We hope you enjoy using it!</Typography>
        <img src="https://i.pinimg.com/originals/0d/cd/6f/0dcd6f4e410a34465a2d611913199e50.gif" alt="smiley face" height="20%" width="20%" /><br></br>
    </div>

export default Welcome






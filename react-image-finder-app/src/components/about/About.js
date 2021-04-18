import React from 'react'
import Header from '../ui/Header'
import Typography from '@material-ui/core/Typography'

const About = () => {
    return (
        <div>
            <Header />
            <br></br>
            <Typography variant="h4">About Us</Typography>
            <img src="https://www.aclandstreetphysiotherapy.com.au/uploads/5/7/6/4/57645519/barry-nguyen-ceo-healthaide_orig.png" alt="barry's headshot" style={{ height: '20%', width: '20%', borderRadius: '100px', padding: "30px" }} /><br></br>
            <p><i><strong>Image Finder</strong></i> was founded and developed by Barry Nguyen. He is a full-stack software engineer in training with an extensive background in tech startups and healthcare. He has a passion for solving complex engineering and tech adoption problems which have the potential for significant societal impact.</p>
            <br></br>
            <p> This app was built from the frameworks React.JS, Material-UI and React Select.</p>
        </div>
    )
}

export default About

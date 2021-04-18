import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/styles'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0); //React Hook used here
    //const [anchorEl, setAnchorEl] = useState(null) // for menu
    const handleChange = (e, value) => {
        setValue(value)
        console.log("ajdsfjasfdjkfs", value)
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4">
                    Image Finder
                </Typography>
                <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                    <Tab className={classes.tab} component={Link} to='/' label="Search" />
                    <Tab className={classes.tab} component={Link} to='/about' label="About Us" />
                    <Tab className={classes.tab} component={Link} to='/faq' label="FAQ" />
                    <Tab className={classes.tab} component={Link} to='/contact' label="Contact Us" />
                    <Tab className={classes.tab} component={Link} icon={<AccountBoxIcon />} to='/login' label="Login" />
                    <Tab className={classes.tab} component={Link} icon={<AddBoxIcon />} to='/register' label="Register" />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

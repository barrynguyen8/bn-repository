import React from 'react'
import Header from '../ui/Header'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Faq() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <br></br>
      <Typography variant="h4">Frequently Asked Questions (FAQ)</Typography>
      <br></br>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Who developed this app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Founder Barry Nguyen is a full-stack software engineer in training with an extensive background in tech startups and healthcare. He has a passion for solving complex engineering and tech adoption problems which have the potential for significant societal impact.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What image API library is used for this app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pixabay is a vibrant community of creatives, sharing copyright free images, videos and music. All contents are released under the Pixabay License, which makes them safe to use without asking for permission or giving credit to the artist - even for commercial purposes.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What new features will be released in the future?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Barry is in the process of developing a built-in photo editor as well as drawing tools.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How do I provide the developer feedback?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click on our <Link to='/contact'>Contact Us</Link> tab and submit an inquiry. We are always open to new ideas, feedback and collaboration opportunities.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}





import React from 'react'
import axios from 'axios'
import EventsList from './EventsList'
import EventForm from './EventForm'

import './Healthaide.css'

class Healthaide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/events'
    })
    .then(response => {
      this.setState({events: response.data})
    })
  }

  addNewEvent = (event) => {
    const events = [...this.state.events, event].sort(function(a, b){
      return new Date(a.start_datetime) - new Date(b.start_datetime)
    })
    this.setState({events: events})
  }

  render() {
    const currentUser = localStorage.getItem('user')
    return (
      <div>
        {currentUser &&
          <EventForm onSuccess={this.addNewEvent} />
        }
        <EventsList events={this.state.events} />
      </div>
    )
  }
}

export default Healthaide
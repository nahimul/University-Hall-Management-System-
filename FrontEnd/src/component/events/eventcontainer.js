import React from 'react';
import { Link } from 'react-router-dom';
import './eventcontainerstyle.css';
import Contact from '../contactus/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const EventContainer = () => {
  const eventList = (
    <div className="event event1 trans">
      <div className="event-image">
        <img src={process.env.PUBLIC_URL + '/event1.png'} alt="Event" />
      </div>
      <div className="event-text">
        <p className="date">
          <FontAwesomeIcon className="i" icon={faCalendarCheck} /> 01 July 2024
        </p>
        <h3>Event Title</h3>
        <p>
          Event Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque dolor iste exercitationem unde cum at nihil pariatur
          fugit alias. Totam dolores reiciendis asperiores quibusdam nihil sunt
          voluptates voluptatum dolore nesciunt?
        </p>
        <div className="read-more">
          <Link to="/event">Read More</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="event-container">
      <h2>Recent Event</h2>
      {eventList}
      {eventList}
      {eventList}
      {eventList}
      {eventList}
      {eventList}
    </div>
  );
};

export default EventContainer;

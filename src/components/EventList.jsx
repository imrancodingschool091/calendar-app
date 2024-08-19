import React from 'react';
import { useEvents } from '../contexts/EventContext';
import EventForm from './EventForm';

const EventList = () => {
  const { events } = useEvents();
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleEdit = (event) => setSelectedEvent(event);

  return (
    <div>
      <h2>Events</h2>
      {events.map(event => (
        <div key={event.id}>
          <span>{event.title}</span>
          <button onClick={() => handleEdit(event)}>Edit</button>
        </div>
      ))}
      {selectedEvent && (
        <EventForm 
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventList;

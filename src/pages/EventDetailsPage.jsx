import React from 'react';
import { useParams } from 'react-router-dom';
import { useEvents } from '../contexts/EventContext';
import EventForm from '../components/EventForm';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { events, editEvent, deleteEvent } = useEvents();
  const event = events.find(event => event.id === parseInt(id));

  const [showForm, setShowForm] = React.useState(false);

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{new Date(event.date).toDateString()}</p>
      <button onClick={() => setShowForm(true)}>Edit</button>
      <button onClick={() => deleteEvent(event.id)}>Delete</button>
      {showForm && <EventForm event={event} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default EventDetailsPage;

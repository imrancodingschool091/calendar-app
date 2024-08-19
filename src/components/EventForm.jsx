import React, { useState } from 'react';
import { useEvents } from '../contexts/EventContext';

const EventForm = ({ event, onClose }) => {
  const { addEvent, editEvent } = useEvents();
  const [title, setTitle] = useState(event ? event.title : '');
  const [date, setDate] = useState(event ? event.date : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      editEvent({ ...event, title, date });
    } else {
      addEvent({ id: Date.now(), title, date });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Event Title"
        required
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EventForm;

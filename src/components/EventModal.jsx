import React from 'react';
import { useEvents } from '../contexts/EventContext';

const EventModal = ({ event, onClose }) => {
  const { deleteEvent } = useEvents();

  const handleDelete = () => {
    deleteEvent(event.id);
    onClose();
  };

  return (
    <div className="modal">
      <h2>{event.title}</h2>
      <p>{new Date(event.date).toDateString()}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EventModal;

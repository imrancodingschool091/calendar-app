import React from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import EventModal from '../components/EventModal';
import Filter from '../components/Filter';
import { useEvents } from '../contexts/EventContext';

const CalendarPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [filter, setFilter] = React.useState('');
  const { events } = useEvents();

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredEvents = events.filter(event => filter === '' || event.category === filter);

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Event</button>
      <Filter onChange={handleFilterChange} />
      <Calendar events={filteredEvents} onEventClick={setSelectedEvent} />
      {showForm && <EventForm onClose={() => setShowForm(false)} />}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
};

export default CalendarPage;

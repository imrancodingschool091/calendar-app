import React from 'react';
import { useEvents } from '../contexts/EventContext';
import { format, eachDayOfInterval, startOfMonth, endOfMonth, isToday } from 'date-fns';

const Calendar = () => {
  const { events } = useEvents();
  const now = new Date();
  const start = startOfMonth(now);
  const end = endOfMonth(now);
  const days = eachDayOfInterval({ start, end });

  return (
    <div className="calendar">
      <header>{format(now, 'MMMM yyyy')}</header>
      <div className="days">
        {days.map(day => (
          <div key={day} className={`day ${isToday(day) ? 'today' : ''}`}>
            {format(day, 'd')}
            {events.filter(event => new Date(event.date).toDateString() === day.toDateString())
              .map(event => (
                <div key={event.id} className="event">{event.title}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

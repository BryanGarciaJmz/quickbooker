import './Calendar.css';
import { useMemo, useState } from 'react';

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days = [];
  // leading blanks
  for (let i = 0; i < first.getDay(); i++) {
    days.push(null);
  }
  for (let d = 1; d <= last.getDate(); d++) {
    days.push(new Date(year, month, d));
  }
  return days;
}

export default function Calendar() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const days = useMemo(() => buildMonth(year, month), [year, month]);

  const nextMonth = () => setCursor(new Date(year, month + 1, 1));
  const prevMonth = () => setCursor(new Date(year, month - 1, 1));

  // Generar etiqueta de mes con "de" en minúsculas siempre
  const monthName = cursor.toLocaleDateString('es-MX', { month: 'long' });
  const monthLabel = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} de ${year}`;

  return (
    <section className="calendar">
      <div className="calendar__toolbar">
        <button onClick={prevMonth} aria-label="Mes anterior" className="calendar__nav">‹</button>
        <h2 className="calendar__title">{monthLabel}</h2>
        <button onClick={nextMonth} aria-label="Mes siguiente" className="calendar__nav">›</button>
      </div>
      <div className="calendar__weekdays">
        {['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="calendar__grid" role="grid" aria-label={`Calendario de ${monthLabel}`}>
        {days.map((day, idx) => {
          if (!day) return <div key={`blank-${idx}`} className="calendar__cell calendar__cell--blank" aria-hidden="true" />;
          const isToday = day.toDateString() === today.toDateString();
          return (
            <button
              key={day.toISOString()}
              className={`calendar__cell ${isToday ? 'calendar__cell--today' : ''}`}
              type="button"
              aria-label={day.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}
            >
              <span>{day.getDate()}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

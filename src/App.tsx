import React, { useState } from 'react';
import type { RunData } from './assets/RunItem.tsx';
import './index.css';

export default function App() {
  const [runs, setRuns] = useState<RunData[]>([]);
  const [form, setForm] = useState({
    date: '',
    distance: '',
    pace: '',
    note: '',
  });

  const [quote, setQuote] = useState({content: '', author: ''}); 

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random?tags=fitness|inspirational');
      const data = await res.json();
        setQuote({ content: data.content, author: data.author });
    } catch (err) {
      setQuote({ content:'Keep running, no matter what!', author: 'Unknown' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRun: RunData = {
      id: Date.now(),
      date: form.date,
      distance: parseFloat(form.distance),
      pace: form.pace,
      note: form.note,
      quote: quote || 'Keep running, no matter what!',
    };
    setRuns((prev) => [newRun, ...prev]);
    setForm({ date: '', distance: '', pace: '', note: '' });
    setQuote({ content:' ', author: ' ' });
  };

  return (
    <div className="container">
      <h1>🏃 RunLog Diary with Your Today's Quotes!! 😎</h1>


      {quote && (
        <blockquote style={{ fontStyle: 'italic', marginBottom: '10px', color: '#555', fontSize: '20px' }}>
          💬 "{quote.content}"
          <br />
            <span style={{ fontSize: '13px', color: '#888' }}>
            — {quote.author} —
            </span>
        </blockquote>
      )}


      <button className="quote-button" type="button" onClick={fetchQuote}>
        Click for Your Today's Random Quote!
      </button>

      <form onSubmit={handleSubmit}>
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input
          name="distance"
          type="number"
          step="0.1"
          placeholder="Distance (km)"
          value={form.distance}
          onChange={handleChange}
          required
        />
        <input
          name="pace"
          type="text"
          placeholder="Pace (0930/km)"
          value={form.pace}
          onChange={handleChange}
          required
        />
        <textarea name="note" placeholder="Note" value={form.note} onChange={handleChange}></textarea>
        <button type="submit">Add Run</button>
      </form>

      <hr />

      <h2>🌍 Your Runs 🧸</h2>
      {runs.length === 0 && <p>No runs yet. Add your first run!</p>}
      {runs.map((run) => (
  <div
    key={run.id}
    style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '#f9f9f9',
    }}
  >
    <h3>📅 {run.date}</h3>
    <p><strong>🏁 Distance:</strong> {run.distance} km</p>
    <p><strong>⏱ Pace:</strong> {run.pace} /km</p>
    {run.note && <p><strong>📝 Note:</strong> {run.note}</p>}
    {run.quote && (
      <blockquote
        style={{
          borderLeft: '3px solid #aaa',
          paddingLeft: '10px',
          color: '#555',
          fontStyle: 'italic',
          marginTop: '10px',
        }}
      >
        💬 {run.quote.content} <br /> — {run.quote.author}
      </blockquote>
    )}
  </div>
))}

    </div>
  );
}

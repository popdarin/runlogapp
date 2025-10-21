

export type RunData = {
  id: number;
  date: string;
  distance: number;
  pace: string;
  note: string;
  quote?: {
    content: string;
    author: string;
  }
};

export default function RunItem({ run }: { run: RunData }) {
  return (
    <div className="run-item">
      <p><strong>{run.date}</strong> — {run.distance} km @ {run.pace}/km</p>
      {run.note && <p>📝 {run.note}</p>}
    </div>
  );
}

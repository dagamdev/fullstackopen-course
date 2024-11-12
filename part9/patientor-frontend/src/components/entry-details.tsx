import type { Diagnosis, Entry } from "../types";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import WorkIcon from '@mui/icons-material/Work';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const hearts = ['❤️', '🧡', '💛', '💚'];

export default function EntryDetails ({entry, diagnoses}: {
  entry: Entry
  diagnoses: Diagnosis[]
}) {
  switch (entry.type) {
    case 'Hospital':
      return (
        <article className="entry">
          <p><LocalHospitalIcon /> {entry.date}</p>

          <p>{entry.description}</p>

          {entry.diagnosisCodes?.length && <ul>
            {entry.diagnosisCodes?.map(d => <li key={d}><span>{d}</span> {diagnoses.find(di => di.code === d)?.name}</li>)}
          </ul>}

          <p><strong>Diagnose by:</strong> {entry.specialist}</p>
        </article>
      );

    case 'HealthCheck':
      return (
        <article className="entry">
          <p><MonitorHeartIcon /> {entry.date}</p>

          <p>{entry.description}</p>

          {hearts[entry.healthCheckRating]}

          {entry.diagnosisCodes?.length && <ul>
            {entry.diagnosisCodes?.map(d => <li key={d}><span>{d}</span> {diagnoses.find(di => di.code === d)?.name}</li>)}
          </ul>}

          <p><strong>Diagnose by:</strong> {entry.specialist}</p>
        </article>
      );
  
    case 'OccupationalHealthcare':
      return (
        <article className="entry">
          <p><WorkIcon /> {entry.date} {entry.employerName}</p>

          <p>{entry.description}</p>

          {entry.diagnosisCodes?.length && <ul>
            {entry.diagnosisCodes?.map(d => <li key={d}><span>{d}</span> {diagnoses.find(di => di.code === d)?.name}</li>)}
          </ul>}

          <p><strong>Diagnose by:</strong> {entry.specialist}</p>
        </article>
      );
    
    default:
      return null;
  }
}
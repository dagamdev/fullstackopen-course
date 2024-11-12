import { Typography } from "@mui/material";
import type { Diagnosis, Patient } from "../types";
import { Male, Female } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import patientService from "../services/patients";

export default function PatientPage ({diagnoses, setDiagnoses}: {
  diagnoses: Diagnosis[]
  setDiagnoses: Dispatch<SetStateAction<Diagnosis[]>>
}) {
  const {id} = useParams();
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    if (diagnoses.length === 0) {
      patientService.getDiagnoses().then(data => {
        setDiagnoses(data);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) {
      patientService.getPatient(id).then(data => {
        setPatient(data);
      });
    }
  }, [id]);

  return patient && (
    <section>
      <Typography variant="h3">
        {patient.name} {patient.gender === 'male' ? <Male fontSize="large"/> : <Female fontSize="large"/>}
      </Typography>

      {patient.ssn && <p>ssh: {patient.ssn}</p>}
      <p>Ocupation: {patient.occupation}</p>
      
      <div>
        <Typography variant="h5" fontWeight={'bold'}>
          Entries
        </Typography> 

        <div>
          {patient.entries.map(e => <article key={e.id}>
            <p>{e.date} {e.description}</p>

            <ul>
              {e.diagnosisCodes?.map(d => <li key={d}><span>{d}</span> {diagnoses.find(di => di.code === d)?.name}</li>)}
            </ul>
          </article>)}
        </div>
      </div>
    </section>
  );
}
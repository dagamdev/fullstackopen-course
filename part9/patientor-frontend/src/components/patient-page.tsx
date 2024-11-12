import { Typography } from "@mui/material";
import type { Patient } from "../types";
import { Male, Female } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../services/patients";

export default function PatientPage () {
  const {id} = useParams();
  const [patient, setPatient] = useState<Patient>();


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
    </section>
  );
}
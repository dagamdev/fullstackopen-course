import { Typography } from "@mui/material";
import type { Patient } from "../types";
import { Male, Female } from "@mui/icons-material";

export default function PatientPage ({patient}: {patient: Patient}) {
  return (
    <section>
      <Typography variant="h3">
        {patient.name} {patient.gender === 'male' ? <Male fontSize="large"/> : <Female fontSize="large"/>}
      </Typography>

      {patient.ssn && <p>ssh: {patient.ssn}</p>}
      <p>Ocupation: {patient.occupation}</p>
    </section>
  );
}
import type { Patient } from "../types";

export default function PatientPage ({patient}: {patient: Patient}) {
  return (
    <section>
      <h1>{patient.name}</h1>

      {patient.ssn && <p>ssh: {patient.ssn}</p>}
      <p>Ocupation: {patient.occupation}</p>
    </section>
  );
}
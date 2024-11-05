function calculateBmi (height: number, weight: number) {
  const imc = weight / Math.pow(height, 2)
  console.log({imc})

  if (imc < 18.5) return `Low (unhealthy weight)`
  if (imc >= 18.5 && imc < 25) return `Normal (healthy weight)`
  if (imc >= 25 && imc < 30) return `Overweight (unhealthy weight)`
  if (imc >= 30) return `Obesity (unhealthy weight)`
}

console.log(calculateBmi(1.80, 74))
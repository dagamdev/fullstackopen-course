export function calculateBmi (height: number, weight: number) {
  const imc = weight / Math.pow(height, 2)

  if (imc < 18.5) return `Low (unhealthy weight)`
  if (imc >= 18.5 && imc < 25) return `Normal (healthy weight)`
  if (imc >= 25 && imc < 30) return `Overweight (unhealthy weight)`
  return `Obesity (unhealthy weight)`
}

// const height = Number(process.argv[2])
// const weight = Number(process.argv[3])

// try {
//   if (isNaN(height)) throw new Error('The height value is not a number')
//   if (isNaN(weight)) throw new Error('The weight value is not a number')
//   console.log(calculateBmi(height, weight))
// } catch (error) {
//   if (error instanceof Error) {
//     console.error(error.message)
//   } else console.error('An error has occurred')
// }


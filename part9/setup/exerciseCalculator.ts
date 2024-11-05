interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

function calculateExercises (hours: number[], target: number): Result {
  let trainingDays = 0, success = true, allHours = 0, rating = 0, ratingDescription = ''

  for (const hour of hours) {
    if (hour) {
      trainingDays++
      allHours+=hour
    } else if (success) success = false
  }

  const periodLength = hours.length
  const average = allHours / periodLength
  const firstMedition = target / 2
  console.log(firstMedition, average)

  if (average <= firstMedition) {
    rating = 1
    ratingDescription = "It's terrible, you're scum"
  }
  if (average > firstMedition && average < target) {
    rating = 2
    ratingDescription = "It's bad but you are very close to the ideal"
  }
  if (average === target) {
    rating = 3
    ratingDescription = 'You are a beast, you have total mental control over your body'
  }

  return {
    periodLength,
    trainingDays,
    success,
    target,
    average,
    rating,
    ratingDescription
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
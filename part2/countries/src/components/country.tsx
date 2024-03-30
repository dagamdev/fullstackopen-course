import type { Country } from '../country'

export default function Country ({ country }: {
  country: Country
}) {
  return (
    <article>
      <h1>{country.name.common}</h1>

      <div>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Area:</strong> {country.area}
        </p>
      </div>

      <section>
        <h3>Languages:</h3>

        <ul>
          {Object.values(country.languages ?? {}).map(l => <li key={l}>{l}</li>)}
        </ul>
      </section>

      <img className='flag' src={country.flags.svg} alt={`${country.name.common} flag`} />
    </article>
  )
}
import uniqid from 'uniqid'
import { certificates } from '../../portfolio'
import './Certificates.css'

const Certificates = () => {
  if (!certificates.length) return null

  return (
    <section className='section certificates' id='certificates'>
      <h2 className='section__title'>Certificates</h2>
      <ul className='certificates__list'>
        {certificates.map((skill) => (
          <li key={uniqid()} className='certificates__list-item btn btn--plain'><a href={skill.link} target="_blank" rel="noopener noreferrer">
            {skill.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Certificates

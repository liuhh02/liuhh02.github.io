import uniqid from 'uniqid'
import { awards } from '../../portfolio'
import './Awards.css'

const Awards = () => {
  if (!awards.length) return null

  return (
    <section className='section awards' id='awards'>
      <h2 className='section__title'>Awards & Honors</h2>
      <ul className='awards__list'>
        {awards.map((skill) => (
          <li key={uniqid()} className='awards__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Awards

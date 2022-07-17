import uniqid from 'uniqid'
import { education } from '../../portfolio'
import EducationContainer from '../EducationContainer/EducationContainer'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education & Research</h2>

      <div className='education__grid'>
        {education.map((exp) => (
          <EducationContainer key={uniqid()} education={exp} />
        ))}
      </div>
    </section>
  )
}

export default Education

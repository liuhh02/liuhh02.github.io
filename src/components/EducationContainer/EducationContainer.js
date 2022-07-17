import uniqid from 'uniqid'
import './EducationContainer.css'

const EducationContainer = ({ education }) => (
  <div className='education'>
    <h3>{education.name}</h3>

    <p className='education__stack'>{education.stack}</p>
    {education.description && (
      <ul className='education__description'>
        {education.description.map((item) => (
          <li key={uniqid()} className='education__description-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  
  </div>

)

export default EducationContainer
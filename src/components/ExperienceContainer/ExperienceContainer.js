import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.name}</h3>

    <p className='experience__stack'>{experience.stack}</p>
    {experience.description && (
      <ul className='experience__description'>
        {experience.description.map((item) => (
          <li key={uniqid()} className='experience__description-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  
  </div>

)

export default ExperienceContainer
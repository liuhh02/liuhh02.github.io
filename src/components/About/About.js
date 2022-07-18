import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TerminalIcon from '@mui/icons-material/Terminal'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.devpost && (
              <a
                href={social.devpost}
                aria-label='devpost'
                className='link link--icon'
              >
                <TerminalIcon />
              </a>
            )}

            {social.medium && (
              <a
                href={social.medium}
                aria-label='medium'
                className='link link--icon'
              >
                <RssFeedIcon />
              </a>
            )}

            {social.scholar && (
              <a
                href={social.scholar}
                aria-label='scholar'
                className='link link--icon'
              >
                <HistoryEduIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About

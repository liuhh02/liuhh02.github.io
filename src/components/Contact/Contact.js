import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TerminalIcon from '@mui/icons-material/Terminal'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const { email, social } = contact

  return (
    <section className='section contact center' id='contact'>
      <div className='contact center'>
        {email && (
          <a href={`mailto:${email}`}>
            <span type='button' className='btn btn--outline'>
              Email me
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank" rel="noopener noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank" rel="noopener noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.devpost && (
              <a
                href={social.devpost}
                target="_blank" rel="noopener noreferrer"
                aria-label='devpost'
                className='link link--icon'
              >
                <TerminalIcon />
              </a>
            )}

            {social.medium && (
              <a
                href={social.medium}
                target="_blank" rel="noopener noreferrer"
                aria-label='medium'
                className='link link--icon'
              >
                <RssFeedIcon />
              </a>
            )}

            {social.scholar && (
              <a
                href={social.scholar}
                target="_blank" rel="noopener noreferrer"
                aria-label='scholar'
                className='link link--icon'
              >
                <HistoryEduIcon />
              </a>
            )}
          </>
        )}
      </div>
      
    </section>
  )
}

export default Contact

import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const styles = {
  links: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: 10,
  },
  center: {
    position: 'fixed', left: '47%', bottom: '0%',
  }
}

const Footer = () => {
  return (
    <footer style={styles.center}>
      <a href="https://github.com/WellsWu4621" style={styles.links}><FaGithub size="50"/></a>
      <a href="https://www.linkedin.com/in/wells-wu-169497125/" style={styles.links}><FaLinkedin size="50"/></a>
      <a href="https://stackoverflow.com/users/15616491/wells-wu?tab=profile" style={styles.links}><FaStackOverflow size="50"/></a>
    </footer>
  )
}

export default Footer
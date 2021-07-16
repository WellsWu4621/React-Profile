import React from 'react';
import bonus from './image/bonus.png'
import E2A from './image/E2ALogin.png'
import gyeezyimg from './image/gyeezyimg.jpg'
import weather from './image/weather.png'
import techblog from './image/techblog.png'
import passwordgen from './image/passwordgen.png'
import { FaGithub } from 'react-icons/fa';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody
} from 'reactstrap';

const styles = {
  cardback: {
    marginBottom: 20,
    background: 'transparent',
    display: 'flex'
  },
  links: {
    textDecoration: 'none',
    color: 'inherit'
  }
}

const Portfolio = (props) => {
  return (
    <Container>

      <Row>
        <Col md='6' lg='4'>
          <Card inverse style={styles.cardback}>
            <CardImg width="100%" height='240px' src={gyeezyimg} alt="gyeezy" />
            <CardTitle tag="h5"><a href='https://bwclark90.github.io/G-Yeezy-project/index.html' target='_blank' style={styles.links}>Gyeezy Game Search  </a>
              <a href='https://github.com/bwclark90/G-Yeezy-project' target='_blank' style={styles.links}><FaGithub /></a>
            </CardTitle>

            <CardBody>
              <small className="text-info">A game search engine</small>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card inverse style={styles.cardback}>
            <CardImg width="100%" height='240px' src={E2A} alt="bets" />
            <CardTitle tag="h5"><a href='https://dry-island-15959.herokuapp.com/' target='_blank' style={styles.links}>Surprise Mechanics  </a>
              <a href='https://github.com/WellsWu4621/Surprise-Mechanics' target='_blank' style={styles.links}><FaGithub /></a>
            </CardTitle>
            <CardBody>
              <small className="text-info">A betting website</small>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card inverse style={styles.cardback}>
            <CardImg width="100%" height='240px' src={bonus} alt="employee tracker" />
            <CardTitle tag="h5"><a href='https://github.com/WellsWu4621/Employee-Tracker' target='_blank' style={styles.links}>Employee Tracker  </a>
              <a href='https://github.com/WellsWu4621/Employee-Tracker' target='_blank' style={styles.links}><FaGithub /></a>
            </CardTitle>
            <CardBody>
              <small className="text-info">A backend employee tracker</small>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card inverse style={styles.cardback}>
            <CardImg width="100%" height='240px' src={weather} alt="weather" />
            <CardTitle tag="h5"><a href='https://wellswu4621.github.io/Weather-Dashboard/' target='_blank' style={styles.links}>Draobhsad Rehtaew  </a>
              <a href='https://github.com/WellsWu4621/Weather-Dashboard' target='_blank' style={styles.links}><FaGithub /></a>
            </CardTitle>
            <CardBody>
              <small className="text-info">A weather dashboard</small>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card inverse style={styles.cardback}>
            <CardImg width="100%" height='240px' src={techblog} alt="tech blog" />
            <CardTitle tag="h5"><a href='https://github.com/WellsWu4621/Tech-Blog' target='_blank' style={styles.links}>Tech Blog  </a>
              <a href='https://github.com/WellsWu4621/Tech-Blog' target='_blank' style={styles.links}><FaGithub /></a>
            </CardTitle>
            <CardBody>
              <small className="text-info">A tech blog</small>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' lg='4'>
          <Card inverse style={styles.cardback}>
            <CardImg width="100%" height='240px' src={passwordgen} alt="password" />
            <CardTitle tag="h5"><a href='https://wellswu4621.github.io/PasswordGen/' target='_blank' style={styles.links}>Password Generator  </a>
              <a href='https://github.com/WellsWu4621/PasswordGen' target='_blank' style={styles.links}><FaGithub /></a>
            </CardTitle>
            <CardBody>
              <small className="text-info">A password generator</small>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio

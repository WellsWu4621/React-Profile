import React from 'react';
import bonus from './image/bonus.png'
import E2A from './image/E2ALogin.png'
import gyeezyimg from './image/gyeezyimg.jpg'
import weather from './image/weather.png'
import {
  Container, 
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button, 
  CardBody
} from 'reactstrap';

const styles = {
  cardback: {
  background: 'transparent',
  display: 'flex'
}
}

const Portfolio = (props) => {
  return (
    <Container>

    <Row>
      <Col md='6' lg='4'>
          <Card inverse style={ styles.cardback }>
            <CardImg width="100%" height='240px' src={ gyeezyimg } alt="Card image cap" />
              <CardTitle tag="h5">Gyeezy Game Search</CardTitle>
              <CardBody>
                <small className="text-muted">A game search engine</small>
              </CardBody>
          </Card>
      </Col>
      <Col md='6' lg='4'>
          <Card inverse style={ styles.cardback }>
            <CardImg width="100%" height='240px' src={ E2A } alt="Card image cap" />
              <CardTitle tag="h5">Surprise Mechanics</CardTitle>
              <CardBody>
                <small className="text-muted">A betting website</small>
              </CardBody>
          </Card>
      </Col>
      <Col md='6' lg='4'>
          <Card inverse style={ styles.cardback }>
            <CardImg width="100%" height='240px' src={ bonus } alt="Card image cap" />
              <CardTitle tag="h5">Employee Tracker</CardTitle>
              <CardBody>
                <small className="text-muted">A backend employee tracker</small>
              </CardBody>
          </Card>
      </Col>
      <Col md='6' lg='4'>
          <Card inverse style={ styles.cardback }>
            <CardImg width="100%" height='240px' src={ weather } alt="Card image cap" />
              <CardTitle tag="h5">Draobhsad Rehtaew</CardTitle>
              <CardBody>
                <small className="text-muted">A weather dashboard</small>
              </CardBody>
          </Card>
      </Col>
    </Row>
    </Container>
  )
}

export default Portfolio

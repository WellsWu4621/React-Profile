import React from 'react';
import { Container, Row, Jumbotron } from 'reactstrap'

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Jumbotron>
            <a className="text-info" href="./Resume_Website_copy.pdf" download="Wells_Wu_Resume">Resume</a>
            <h6 className='display-3'>Proficiencies</h6>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>mySQL</li>
              <li>MongoDB</li>
            </ul>

          </Jumbotron>
        </Row>
      </Container>
    </div >
  )
}

export default About
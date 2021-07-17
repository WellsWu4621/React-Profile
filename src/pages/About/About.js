import React from 'react';
import { Container, Row, Jumbotron, Media } from 'reactstrap'
import profile from './images.jfif'

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Jumbotron>
            <h1 className='display-3'>About Me</h1>
            <Media object src={profile} alt="Generic placeholder image" />
          <p className='lead'>Hi, I'm Wells Wu</p>
          <hr className='my-2' />
          <p>Hello, just a short self-insert here. I am and aspiring full-stack developer currently studying at UC Irvine. I also have a Bachelor's in Applied Mathematics from UC Riverside, where I learned a bit of C++ and LC-3. Previously, I worked as an Data Entry Specialist at Rubber-Cal Inc. I am currently working on strengthening my Full Stack skills. In the future, I plan on learning Python and C#.</p>
          <p>For hobbies, I greatly enjoy tinkering with PC-Building. I am an avid Path of Exile player, with experience in Monster Hunter: World and several other Action RPGs as well. I also play League of Legends quite a bit and you can see me playing plenty of other variety games. Due to my passion for video games, I am interested in video game development, and am thinking of creating some small scale games.</p>
          </Jumbotron>
        </Row>
      </Container>
    </div >
  )
}

export default About


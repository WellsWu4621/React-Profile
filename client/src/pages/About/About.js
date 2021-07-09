import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap'

const About = () => {
  return (
    <Container>
      <Row>
        <Jumbotron>
          <h1 className='display-3'>About Me</h1>
          <p className='lead'>Hi, I'm Wells Wu</p>
          <hr className='my-2' />
          <p>Hello, just a short self-insert here. I am and aspiring full-stack developer currently studying at UC Irvine. I also have a Bachelor's in Applied Mathematics from UC Riverside. Previously, I worked as an Data Entry Specialist at Rubber-Cal Inc. Since I'm still new to the field I am lacking a bit on the projects side, but I am rectifying that right now.</p>
          <p>For hobbies, I am an avid Path of Exile player, with experience with some other Action RPGs as well. I also play League of Legends quite a bit and you can see me playing plenty of other variety games. Aside from video games, I greatly enjoy tinkering with PC-Building. I have a plan to upgrade to a full custom water loop as soon as I can get my hands on a new graphics card.</p>
        </Jumbotron>
      </Row>
    </Container>
  )
}

export default About

